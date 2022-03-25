import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Models/cliente';
import { Response } from '../Models/response';

const httpOption ={
  headers: new HttpHeaders({
    'contend-type': 'application/json'
  })

}
@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = 'https://localhost:44386/api/cliente'
  constructor(private _http: HttpClient) { 
  }
  getClientes(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  addClient(cliente: Cliente): Observable<Response>{
    return this._http.post<Response>(this.url, cliente, httpOption)
  }
}
