import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private http = inject(HttpClient);
  // Apuntamos a la URL exacta que acabas de encender en Node
  private apiUrl = 'http://localhost:3000/api/pedidos';

  enviarPedido(pedidoData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pedidoData);
  }
}