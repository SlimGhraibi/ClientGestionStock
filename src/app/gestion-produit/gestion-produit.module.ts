import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProduitComponent } from './components/produit/produit.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProduitService } from './services/produit.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [NavbarComponent, SidebarComponent, ContentComponent, DashboardComponent, ProduitComponent],
  exports: [NavbarComponent, SidebarComponent, ContentComponent],
  providers  : [ProduitService]
})
export class GestionProduitModule { }
