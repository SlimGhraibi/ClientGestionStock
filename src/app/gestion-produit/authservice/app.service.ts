import { SAVE_PRINCIPAL } from './../shared/save.principal.action';
import { API_URLS } from './../config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PrincipalState } from '../shared/principal.state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public isAuthenticated: Boolean = false;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private store: Store<PrincipalState>) { }

  /*on a utilisé cette méthode pour l'authentification coté Angular*/
  /*
  authenticate(credentials, callback) {
      if (credentials && credentials.username === 'user' && credentials.password === 'password') {
      this.isAuthenticated = true;
      return callback && callback();
      } else {
        this.isAuthenticated = false;
      }
      return '';
  } */

  authenticate(credentials, callback) {
    /*btoa est une methode javascript qui va encripter les données de l'utilisateur (username + mot de passe)*/
    if (credentials) {
        const token = btoa(credentials.username + ':' + credentials.password);
        /* add the token to cookie */
        this.cookieService.set('token', token);

        this.http.get(API_URLS.USER_URL).subscribe(response => {
          /* this method will call a principal method in spring boot hwo return user information */
          if (response && response['name']) {
            /*
            this.user = new Principal( response.principal.accountNonExpired,
                                       response.principal.accountNonLocked,
                                       response.principal.authorities,
                                       response.principal.credentialsNonExpired,
                                       response.principal.enabled,
                                       response.principal.username);
                                       */
              this.isAuthenticated = true;
              this.store.dispatch({
                  type: SAVE_PRINCIPAL,
                  payload: response
              });
              console.log('store', this.store);
          } else {
              this.isAuthenticated = false;
          }
          return callback && callback();
        });
      } else {
        this.isAuthenticated = false;
      }
}

  logout(callback) {
     this.http.post('logout', {}).finalize(() => {
         this.isAuthenticated = false;
         return callback && callback();
     }).subscribe();
  }
}
