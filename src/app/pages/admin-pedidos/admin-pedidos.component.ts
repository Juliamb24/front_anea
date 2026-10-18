import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-pedidos.component.html',
  styleUrls: ['./admin-pedidos.component.css']
})
export class AdminPedidosComponent implements OnInit {

  private readonly CLAVE_CORRECTA = 'Anea2026Admin!';

  autenticado: boolean = false;
  passwordInput: string = '';
  errorPassword: boolean = false;

  pedidos: any[] = [];
  donaciones: any[] = [];
  suscripciones: any[] = [];
  
  private apiUrlPedidos = 'http://localhost:3000/api/admin/pedidos';
  private apiUrlDonaciones = 'http://localhost:3000/api/admin/donaciones';
  private apiUrlSuscripciones = 'http://localhost:3000/api/admin/suscripciones';

  private http = inject(HttpClient);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const sesionActiva = sessionStorage.getItem('admin_autenticado');
      if (sesionActiva === 'true') {
        this.autenticado = true;
        this.cargarDatosAdmin();
      }
    }
  }

  validarAcceso(): void {
    if (this.passwordInput === this.CLAVE_CORRECTA) {
      this.autenticado = true;
      this.errorPassword = false;
      sessionStorage.setItem('admin_autenticado', 'true');
      this.cargarDatosAdmin();
    } else {
      this.errorPassword = true;
      this.passwordInput = '';
    }
  }

  cancelarAcceso(): void {
    this.router.navigate(['/']);
  }

  cargarDatosAdmin(): void {
    this.cargarPedidos();
    this.cargarDonaciones();
    this.cargarSuscripciones();
  }

  cargarPedidos(): void {
    this.http.get<any[]>(this.apiUrlPedidos).subscribe({
      next: (data) => this.pedidos = data,
      error: (err) => console.error('Error al cargar pedidos:', err)
    });
  }

  cargarDonaciones(): void {
    this.http.get<any[]>(this.apiUrlDonaciones).subscribe({
      next: (data) => this.donaciones = data,
      error: (err) => console.error('Error al cargar donaciones:', err)
    });
  }

  cargarSuscripciones(): void {
    this.http.get<any[]>(this.apiUrlSuscripciones).subscribe({
      next: (data) => this.suscripciones = data,
      error: (err) => console.error('Error al cargar suscripciones:', err)
    });
  }

darDeBajaSuscripcion(idSuscripcionInterno: number): void {
    if (confirm(`¿Estás seguro de que deseas dar de baja esta suscripción? Esta acción la marcará como cancelada.`)) {
      // Cambiado a PUT y usando el id interno de la base de datos
      this.http.put(`${this.apiUrlSuscripciones}/${idSuscripcionInterno}/cancelar`, {}).subscribe({
        next: () => {
          alert('Suscripción dada de baja correctamente.');
          this.cargarSuscripciones(); // Recarga la tabla de suscripciones
        },
        error: (err) => {
          console.error('Error al dar de baja:', err);
          alert('Hubo un error al procesar la baja.');
        }
      });
    }
  }

cambiarEstado(pedido: any): void {
    const nuevoEstado = pedido.estado === 'Enviado' ? 'Pendiente' : 'Enviado';
    
    // Cambiado de pedido.id_pedidos a pedido.id_pedido (en singular)
    this.http.put(`${this.apiUrlPedidos}/${pedido.id_pedido}/estado`, { estado: nuevoEstado }).subscribe({
      next: () => pedido.estado = nuevoEstado,
      error: (err) => {
        console.error('Error al actualizar estado:', err);
        alert('Error al actualizar el estado del pedido.');
      }
    });
  }

  parseProductos(productosCadena: string): any[] {
    if (!productosCadena) return [];
    if (typeof productosCadena === 'string') {
      try {
        const parsed = JSON.parse(productosCadena);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch (e) {
        return [{ title: productosCadena, variant: '', quantity: 1, price: 0 }];
      }
    }
    return Array.isArray(productosCadena) ? productosCadena : [productosCadena];
  }
}