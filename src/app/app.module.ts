import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule} from 'devextreme-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
