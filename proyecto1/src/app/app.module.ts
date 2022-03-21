import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { AppRoutingModule } from './app.routing';
import { ComprasComponent } from './components/compras/compras.component';
import { FormsModule } from '@angular/forms';
import { TiendaComponent } from './components/tienda/tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutenticacionComponent,
    ComprasComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
