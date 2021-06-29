import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickets } from '../interfaces/tickets';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioCambioEstadoService {

  servidor="http://127.0.01:3062";

  constructor(private servicio:HttpClient) { } 

  CambiarEstado(datos:Tickets):Observable<any>{
    console.log(datos);
    return this.servicio.post(`${this.servidor}/modificarEstado`,JSON.stringify(datos),httpOptions);
  }
}