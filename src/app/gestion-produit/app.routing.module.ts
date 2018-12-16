import { ProduitResolver } from './components/produit/produit.resolver';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Routes = [
  {
    path : 'produit',
    component : ProduitComponent,
    resolve : {
        produits: ProduitResolver
    }
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : '',
    redirectTo: '/dashboard',
    pathMatch : 'full'
  }
];

@NgModule ({
 imports : [
  RouterModule.forRoot(appRoutes, { enableTracing : false })
 ],
 exports : [ RouterModule ],
 providers: [ProduitResolver]
})

export class AppRoutingModule {

}
