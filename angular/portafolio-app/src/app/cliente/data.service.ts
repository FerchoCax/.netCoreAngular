import { Injectable } from '@angular/core';
import { Cliente } from  '../cliente/Cliente.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = "https://localhost:5001/api/Clientes";
  constructor(private http:HttpClient) { }

  getAllClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlAPI);
  }

}
