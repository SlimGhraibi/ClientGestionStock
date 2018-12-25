import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
/*
Interceptor :  intercept and modify HTTP requests globally---> come with Angular 4.3
 Angular’s HttpInterceptor interface to make authenticated HTTP requests.
 */

export class XhrInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    /* intercept the token */
    const token = this.cookieService.get('token');
    /*
    To make changes we need to clone the original request
    As we clone the original request we can set the headers we want.
    In our case its very simple–we just want to add an Authorization header
    */
    const xhr = req.clone({
      headers: req.headers.set('authorization', `Basic ${token}`)
    });
    /*
    Calling next.
    handle means that we are passing control to the next interceptor in the chain, if there is one
    */
    return next.handle(xhr);
  }
}
