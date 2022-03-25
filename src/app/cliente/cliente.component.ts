import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public lista: any[];
  public TableHead = ["idCliente","nombres", "edad", "correo"]
  constructor(private apiCliente: ApiclienteService) { 
  }

  ngOnInit(): void {
    this.getClientes()
  }

  getClientes(){
    this.apiCliente.getClientes().subscribe( response => {
      console.log(response)
      this.lista = response.data;
      })
  }

  getUsuarios(){

  }

}
