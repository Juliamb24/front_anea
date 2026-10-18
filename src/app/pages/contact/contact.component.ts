import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Asegúrate de incluir esto si usas standalone

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule], // Añade CommonModule si es necesario
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private http = inject(HttpClient);

  // URL de tu backend (ajusta el puerto o la ruta según tu configuración de la tienda)
  private apiUrl = 'http://localhost:3000/api/contacto'; 

  correoEnviado = false;
  cargando = false;

  async enviarFormulario(event: Event) {
    event.preventDefault();
    this.cargando = true;

    const form = event.target as HTMLFormElement;
    
    // Capturamos los valores directamente de los inputs usando sus atributos 'name' o IDs
    const datosFormulario = {
      nombre: (form.elements.namedItem('Nombre') as HTMLInputElement)?.value,
      empresa: (form.elements.namedItem('empresa') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      telefono: (form.elements.namedItem('telefono') as HTMLInputElement)?.value,
      asunto: (form.elements.namedItem('asunto') as HTMLSelectElement)?.value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement)?.value
    };

    this.http.post(this.apiUrl, datosFormulario).subscribe({
      next: () => {
        this.correoEnviado = true;
        form.reset();
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al enviar el correo:', err);
        alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
        this.cargando = false;
      }
    });
  }

  resetearFormulario() {
    this.correoEnviado = false;
  }
}