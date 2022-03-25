import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'productos',component: ProductoComponent},
  {path: 'cliente',component: ClienteComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
