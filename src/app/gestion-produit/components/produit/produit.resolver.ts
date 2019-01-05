import { ProduitService } from './../../services/produit.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';


@Injectable()
export class ProduitResolver implements Resolve<any> {

  constructor(private produitService: ProduitService ) {

  }

  resolve() {
    return this.produitService.getAll();
  }
}
