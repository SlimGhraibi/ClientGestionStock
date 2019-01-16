import { UserService } from './../../services/UserService';
import { ProduitService } from './../../services/produit.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit, OnDestroy {

  subscription: Subscription;

  produitsData: any = {
    labels: [],
    datasets: []
  };

  userData: any = {
    labels: [],
    datasets: []
  };

  constructor(private produitService: ProduitService,
              private userService: UserService) { }

/*
   on a eu un problème dans l'update des chartes l'ors de l'init du composant my-chart :/
   on va corriger ca avec les @ViewChild
*/

  ngOnInit() {
    this.getProduitParCategorie();
    this.getUserParRole();
  }


  getProduitParCategorie() {

    const dataSetsQuantite = {
      label: 'Quantitée',
      data: [],
      backgroundColor: '' ,
      borderColor: 'rgb(255, 99, 132)'
    };

    const dataSetsPrixUnitaire = {
      label: 'Prix unitaire',
      data: [],
      backgroundColor: '' ,
      borderColor: 'rgb(255, 99, 132)'
    };

    this.subscription = this.produitService.getAll().subscribe(
      (list) => {
                list.forEach(produit => {
                               this.produitsData.labels.push(produit.ref);
                               dataSetsQuantite.data.push(produit.quantite);
                               dataSetsPrixUnitaire.data.push(produit.prixUnitaire);
                });
        console.log('Subscription Ok !');
      },
      (error) => {
        console.log('An error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );

    this.produitsData.datasets.push(dataSetsQuantite);
    this.produitsData.datasets.push(dataSetsPrixUnitaire);

    return this.produitsData;
  }



  getUserParRole() {

    const dataSetsRoles = {
      label: 'Roles',
      data: [],
      backgroundColor: '' ,
      borderColor: 'rgb(255, 99, 132)'
    };

    this.subscription = this.userService.getAll().subscribe(
      (list) => {
                 list.forEach(user => {
                  this.userData.labels.push(user.username);
                  dataSetsRoles.data.push(user.roles.length);
                });
                console.log('dataSetsRoles', dataSetsRoles);
        console.log('Subscription Ok !');
      },
      (error) => {
        console.log('An error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );

    this.userData.datasets.push(dataSetsRoles);

    console.log(this.userData);
    return this.produitsData;
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

}
