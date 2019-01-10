import { API_URLS } from './../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './../shared/crud.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService implements CrudService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(API_URLS.USER_CRUD_URL);
  }
  add(user: any): Observable<any> {
    return this.httpClient.post(API_URLS.USER_CRUD_URL, user);

  }
  update(user: any): Observable<any> {
    return this.httpClient.put(API_URLS.USER_CRUD_URL, user);

  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(API_URLS.USER_CRUD_URL + `/${id}`);
  }
}
