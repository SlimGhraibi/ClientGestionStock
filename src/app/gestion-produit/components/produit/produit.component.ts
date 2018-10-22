import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[] = [];
  p1: Produit;
  p2: Produit;
  p3: Produit;
  produitForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
     this.produitForm = this.formBuilder.group({
      ref : ['', Validators.required],
      quantite: ['', Validators.required],
      prixUnitaire: ['', Validators.required]
     });
   }

  ngOnInit() {
    this.p1 = new Produit('Telephone', 12, 12);
    this.p2 = new Produit('TV', 12, 12);
    this.p3 = new Produit('PC', 12, 12);
    this.produits.push(this.p1);
    this.produits.push(this.p2);
    this.produits.push(this.p3);
    console.log(this.produits);
  }

}
