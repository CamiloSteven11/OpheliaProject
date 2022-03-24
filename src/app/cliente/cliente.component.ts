import { Component, OnInit } from '@angular/core';
import { NgModule, ViewChild, enableProdMode,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule,} from 'devextreme-angular';
import { ClienteServiceService } from '../services/cliente-service.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private cliente: ClienteServiceService) {
    cliente.getClientes().subscribe( response => (console.log(response)))
   }

  ngOnInit(): void {
  }

}
