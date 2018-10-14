import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, SidebarComponent, ContentComponent],
  exports: [NavbarComponent, SidebarComponent, ContentComponent]
})
export class GestionProduitModule { }
