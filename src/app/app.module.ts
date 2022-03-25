import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { HttpClientModule} from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    ClienteComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
