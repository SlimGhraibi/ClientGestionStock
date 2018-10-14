import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GestionProduitModule } from '../app/gestion-produit/gestion-produit.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GestionProduitModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
