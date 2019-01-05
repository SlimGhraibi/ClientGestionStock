import { UserService } from './../../services/UserService';
import { ProduitService } from '../../services/produit.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';


@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(private userService: UserService ) {

  }

  resolve() {
    return this.userService.getAll();
  }
}
