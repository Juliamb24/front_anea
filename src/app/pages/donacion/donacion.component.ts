import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Asegúrate de cambiar esta ruta exacta según dónde tengas guardado tu servicio o si usas PedidoService:
import { DonacionService } from '../../core/services/donacion.service'; 

declare var paypal: any;

@Component({
  selector: 'app-donacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.css']
})
export class DonacionComponent implements OnInit {

  private platformId = inject(PLATFORM_ID);
  private donacionService = inject(DonacionService);

  cantidadesPredefinidas = [5, 10, 15, 20, 30, 50, 100];
  
  cantidadSeleccionada = 15; 
  mostrarPersonalizado = false;
  cantidadPersonalizadaValue = 0;

  donacionCompletada = false;
  cargando = false;
  cantidadFinal = 15;

  datosDonante = {
    nombre: '',
    email: '',
    telefono: '',
    avisoLegal: false
  };

  ngOnInit() {
    this.initPayPalScript();
  }

  initPayPalScript() {
    if (isPlatformBrowser(this.platformId)) {
      if (document.getElementById('paypal-sdk-script')) {
        this.renderPayPalButtons();
        return;
      }
      const script = document.createElement('script');
      script.id = 'paypal-sdk-script';
      script.src = 'https://www.paypal.com/sdk/js?client-id=ASTSg6_l7qDiQUIEBNj0lgcR4sP-iZPJE6i2I-OMea4vhgcUMd6DNtczZVdMc1sHyklXfXHIVWuOGTXp&currency=EUR';
      script.onload = () => {
        this.renderPayPalButtons();
      };
      document.body.appendChild(script);
    }
  }

  elegirCantidad(monto: number) {
    this.mostrarPersonalizado = false;
    this.cantidadSeleccionada = monto;
  }

  activarPersonalizado() {
    this.mostrarPersonalizado = true;
  }

  actualizarCantidadLibre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cantidadPersonalizadaValue = Number(input.value) || 0;
  }

  obtenerCantidadActual(): number {
    return this.mostrarPersonalizado ? this.cantidadPersonalizadaValue : this.cantidadSeleccionada;
  }

  esFormularioValido(): boolean {
    const d = this.datosDonante;
    const importe = this.obtenerCantidadActual();
    
    return !!(
      d.nombre && d.nombre.trim() !== '' &&
      d.email && d.email.trim() !== '' &&
      d.avisoLegal &&
      importe >= 5
    );
  }

  renderPayPalButtons() {
    if (isPlatformBrowser(this.platformId)) {
      const btnContainer = document.getElementById('paypal-button-container');
      if (!btnContainer) return;
      btnContainer.innerHTML = '';

      const self = this;

      paypal.Buttons({
        onInit: (data: any, actions: any) => {
          if (!self.esFormularioValido()) {
            actions.disable();
          } else {
            actions.enable();
          }

          const form = document.querySelector('.collab-form');
          if (form) {
            form.addEventListener('input', () => {
              if (self.esFormularioValido()) {
                actions.enable();
              } else {
                actions.disable();
              }
            });
            const checkbox = document.getElementById('collabLegal');
            if (checkbox) {
              checkbox.addEventListener('change', () => {
                if (self.esFormularioValido()) {
                  actions.enable();
                } else {
                  actions.disable();
                }
              });
            }
          }
        },

        onClick: (data: any, actions: any) => {
          const importe = self.obtenerCantidadActual();
          if (importe < 5) {
            alert('La aportación mínima para colaborar en ANEA es de 5€.');
            return actions.reject();
          }
          if (!self.esFormularioValido()) {
            alert('Por favor, completa tu nombre, correo electrónico y acepta la política de privacidad obligatoria.');
            return actions.reject();
          }
        },

        createOrder: (data: any, actions: any) => {
          self.cantidadFinal = self.obtenerCantidadActual();
          return actions.order.create({
            purchase_units: [{
              amount: { value: self.cantidadFinal.toFixed(2), currency_code: 'EUR' }
            }]
          });
        },

        onApprove: async (data: any, actions: any) => {
          this.cargando = true;
          try {
            const order = await actions.order.capture();
            self.enviarRegistroDonacion(order.id);
          } catch (error) {
            console.error('Error al capturar la orden de PayPal:', error);
            alert('Hubo un error al procesar el pago con PayPal.');
            this.cargando = false;
          }
        }
      }).render('#paypal-button-container');
    }
  }

  enviarRegistroDonacion(orderIdPayPal: string) {
    const payload = {
      id_paypal: orderIdPayPal,
      nombre: this.datosDonante.nombre,
      email: this.datosDonante.email,
      telefono: this.datosDonante.telefono,
      importe: this.cantidadFinal
    };

    // Añadido <any> para evitar que TypeScript se queje del tipado desconocido y explícito en response/err
    this.donacionService.registrarDonacion(payload).subscribe({
      next: (response: any) => {
        this.cargando = false;
        this.donacionCompletada = true;
      },
      error: (err: any) => {
        this.cargando = false;
        console.error(err);
        alert('El pago se realizó con éxito en PayPal, pero ocurrió un error al registrar la donación en el servidor.');
      }
    });
  }
}