import { Produit } from './../../models/produit.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit, OnDestroy {


  produits: Produit[];
  produitForm: FormGroup;
  produitSubscription: Subscription;
  operation: String = 'add';
  selectedProduit: Produit;
  disabled: Boolean = false;

  constructor(private formBuilder: FormBuilder,
              private produitService: ProduitService,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.createForm();
    this.initProduit();
    /* this.loadProduits();  on va changer cette methode par le resolver */
    this.produits = this.route.snapshot.data.produits;
  }

  console() {
    console.log(this.selectedProduit);
  }

  createForm() {
    this.produitForm = this.formBuilder.group({
      ref : ['', Validators.required],
      quantite: ['', Validators.required],
      prixUnitaire: ['', Validators.required]
     });
  }

  loadProduits(): void {
   this.produitSubscription = this.produitService.getProduits().subscribe(
    (value) => {
      this.produits = value;
      console.log('Subscription Ok !');
    },
    (error) => {
      console.log('An error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    }
  );
  }

  addProduit(): void {
     const produit = new Produit(this.produitForm.value);
     this.produitSubscription = this.produitService.addProduit(produit).subscribe(
      (value) => {
        this.initProduit();
        this.loadProduits();
        console.log('Subscription Ok !');
      },
      (error) => {
        console.log('An error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  updateProduit(): void {
    const produit = new Produit(this.produitForm.value);
    this.produitSubscription = this.produitService.updateProduit(this.selectedProduit).subscribe(
     (value) => {
       this.loadProduits();
       console.log('Subscription Ok !');
     },
     (error) => {
       console.log('An error occurred! : ' + error);
     },
     () => {
       console.log('Observable complete!');
     }
   );
 }

 deleteProduit(): void {
  this.produitSubscription = this.produitService.deleteProduit(this.selectedProduit.id).subscribe(
   (value) => {
     console.log('this produit id====>' + this.selectedProduit.id);
     this.loadProduits();
     this.selectedProduit = new Produit({});
     console.log('Subscription Ok !');
   },
   (error) => {
     console.log('An error occurred! : ' + error);
   },
   () => {
     console.log('Observable complete!');
   }
 );
}

  initProduit() {
     this.selectedProduit = new Produit({});
     this.createForm();
  }

  ngOnDestroy(): void {
    if (this.produitSubscription !== undefined) {
        this.produitSubscription.unsubscribe();
        console.log('unsubscription ok !');
    }

  }

}
