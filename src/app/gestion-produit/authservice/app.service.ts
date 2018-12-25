import { API_URLS } from './../config/api.url.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public isAuthenticated: Boolean = false;

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }
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
          if (response && response['name']) {
              this.isAuthenticated = true;
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
