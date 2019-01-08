import { UserService } from './services/UserService';
import { AppService } from './authservice/app.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProduitComponent } from './components/produit/produit.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProduitService } from './services/produit.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { XhrInterceptor } from './interceptor/xhr.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { StoreModule } from '@ngrx/store';
import { principalReducer } from './shared/principal.reducer';
import { CrudComponent } from './components/crud/crud.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({principal: principalReducer})
  ],
  declarations: [NavbarComponent, SidebarComponent, ContentComponent,
                 DashboardComponent, ProduitComponent, LoginComponent, HomeComponent, UtilisateurComponent, CrudComponent],
  exports: [NavbarComponent, SidebarComponent, ContentComponent, ProduitComponent, LoginComponent, HomeComponent],
  providers  : [ProduitService, AppService,
                { provide : HTTP_INTERCEPTORS, useClass : XhrInterceptor, multi: true},
                CookieService,
                UserService
               ]
})
export class GestionProduitModule { }
