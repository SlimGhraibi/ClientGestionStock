import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GestionProduitModule } from '../app/gestion-produit/gestion-produit.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GestionProduitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
