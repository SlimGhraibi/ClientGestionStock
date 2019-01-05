import { UserResolver } from './components/utilisateur/user.resolver';
import { HomeComponent } from './components/home/home.component';
import { ProduitResolver } from './components/produit/produit.resolver';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

export const appRoutes: Routes = [
  {
    path : 'home',
    component : HomeComponent,
    children : [
      {
        path : 'produit',
        component : ProduitComponent,
        resolve : {
            produits: ProduitResolver
        },
        outlet : 'contentOutlet'
      },
      {
        path : 'dashboard',
        component : DashboardComponent,
        outlet : 'contentOutlet'
      },
      {
        path : 'utilisateur',
        component : UtilisateurComponent,
        resolve : {
          users : UserResolver
         },
        outlet : 'contentOutlet'
      }
    ]
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    redirectTo: '/home',
    pathMatch : 'full'
  }
];

@NgModule ({
 imports : [
  RouterModule.forRoot(appRoutes, { enableTracing : false })
 ],
 exports : [ RouterModule ],
 providers: [ProduitResolver, UserResolver]
})

export class AppRoutingModule {

}
