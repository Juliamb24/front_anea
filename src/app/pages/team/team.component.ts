import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ESTO QUITA LOS AVISOS AMARILLOS

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule], // <-- SE AÑADE AQUÍ PARA DARLE PERMISOS AL HTML
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
}