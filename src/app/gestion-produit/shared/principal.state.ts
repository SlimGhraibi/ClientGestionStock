import { Principal } from './../models/principal.model';
/* ici on stoke les Principal : user : ici une interface peut dire un objet vide {} */
export interface  PrincipalState {
  readonly principal: Principal;
}
