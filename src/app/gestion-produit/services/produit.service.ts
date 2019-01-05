import { CrudService } from './../shared/crud.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService  implements CrudService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(API_URLS.PRODUITS_URL);
  }
  add(produit: any): Observable<any> {
    return this.httpClient.post(API_URLS.PRODUITS_URL, produit);

  }
  update(produit: any): Observable<any> {
    return this.httpClient.put(API_URLS.PRODUITS_URL, produit);

  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(API_URLS.PRODUITS_URL + `/${id}`);

  }



/*
  getProduits(): Observable<any> {
    return this.httpClient.get(API_URLS.PRODUITS_URL);
  }

  addProduit(produit: Produit): Observable<any> {
    return this.httpClient.post(API_URLS.PRODUITS_URL, produit);
  }

  updateProduit(produit): Observable<any> {
    return this.httpClient.put(API_URLS.PRODUITS_URL, produit);
  }

  deleteProduit(id: number): Observable<any> {
    return this.httpClient.delete(API_URLS.PRODUITS_URL + `/${id}`);
  }
*/
}
