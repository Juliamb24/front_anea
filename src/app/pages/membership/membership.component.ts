import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuscripcionService } from '../../core/services/suscripcion.service';

declare var paypal: any;

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  private platformId = inject(PLATFORM_ID);
  private suscripcionService = inject(SuscripcionService);

  cuotaSeleccionada = 'estandar'; 
  altaCompletada = false;
  cargando = false;
  importeFinal = 25;

  datosSocio = {
    nombre: '',
    dni: '',
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
      script.src = 'https://www.paypal.com/sdk/js?client-id=BAAthKhA52T-1ihJeEkRE5Gv_wSoZWb1_k9Xzawnv2OJRRscr_6jhd3jo420JZthBY7jvyRY_Fz1bxKiMo&vault=true&intent=subscription';
      script.onload = () => {
        this.renderPayPalButtons();
      };
      document.body.appendChild(script);
    }
  }

  seleccionarCuota(tipo: string) {
    this.cuotaSeleccionada = tipo;
    this.importeFinal = (tipo === 'estandar') ? 25 : 15;
  }

  esFormularioValido(): boolean {
    const d = this.datosSocio;
    return !!(
      d.nombre && d.nombre.trim() !== '' &&
      d.dni && d.dni.trim() !== '' &&
      d.email && d.email.trim() !== '' &&
      d.telefono && d.telefono.trim() !== '' &&
      d.avisoLegal
    );
  }

  renderPayPalButtons() {
    if (isPlatformBrowser(this.platformId)) {
      const btnContainer = document.getElementById('paypal-button-container');
      if (!btnContainer) return;
      btnContainer.innerHTML = '';

      const self = this;

      paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',     // 👈 Color azul configurado
          shape: 'rect',
          label: 'subscribe' // 👈 Texto de suscripción configurado
        },

        onInit: (data: any, actions: any) => {
          if (!self.esFormularioValido()) {
            actions.disable();
          } else {
            actions.enable();
          }

          const form = document.querySelector('.membership-form');
          if (form) {
            form.addEventListener('input', () => {
              if (self.esFormularioValido()) {
                actions.enable();
              } else {
                actions.disable();
              }
            });
            const checkbox = document.getElementById('legal');
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
          if (!self.esFormularioValido()) {
            alert('Por favor, completa todos los campos obligatorios (Nombre, DNI, Email, Teléfono) y acepta la política de privacidad.');
            return actions.reject();
          }
        },

        createSubscription: (data: any, actions: any) => {
          self.importeFinal = (self.cuotaSeleccionada === 'estandar') ? 25 : 15;
          
          const planIdEstandar = 'P-3XM77129F9011053VNJXTBJY'; 
          const planIdJoven = 'P-0K6131776E9772032NJXTBUQ';

          const planIdSeleccionado = (self.cuotaSeleccionada === 'estandar') ? planIdEstandar : planIdJoven;

          return actions.subscription.create({
            plan_id: planIdSeleccionado
          });
        },

        onApprove: async (data: any, actions: any) => {
          this.cargando = true;
          try {
            self.enviarRegistroSuscripcion(data.subscriptionID);
          } catch (error) {
            console.error('Error al procesar la suscripción de PayPal:', error);
            alert('Hubo un error al procesar la suscripción con PayPal.');
            this.cargando = false;
          }
        }
      }).render('#paypal-button-container');
    }
  }

  enviarRegistroSuscripcion(subscriptionIdPayPal: string) {
    const payload = {
      subscription_id_paypal: subscriptionIdPayPal,
      nombre: this.datosSocio.nombre,
      email: this.datosSocio.email,
      dni: this.datosSocio.dni,
      telefono: this.datosSocio.telefono,
      importe: this.importeFinal
    };

    this.suscripcionService.registrarSuscripcionConIdReal(payload).subscribe({
      next: (response: any) => {
        this.cargando = false;
        this.altaCompletada = true;
      },
      error: (err: any) => {
        this.cargando = false;
        console.error(err);
        alert('La suscripción se realizó con éxito en PayPal, pero ocurrió un error al registrar los datos en el servidor.');
      }
    });
  }
}