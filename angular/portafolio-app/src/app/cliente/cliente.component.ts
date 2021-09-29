import { Cliente } from './Cliente.interface';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[];

  constructor(private dataSvc:DataService) { this.clientes=[] }
  ngOnInit(): void {
    this.dataSvc.getAllClientes().subscribe(data =>( this.clientes = data) )
  }

}
