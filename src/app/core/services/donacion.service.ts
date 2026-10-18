import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  private http = inject(HttpClient);
  
  // Ruta de tu backend para procesar la donación
  private apiUrl = 'http://localhost:3000/api/donaciones/completar';

  registrarDonacion(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }
}