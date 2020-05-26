import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Setting } from './setting';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req);
    if (!req.url.includes('i18n')) {
      const baseUrl = Setting.baseUrl + 'api/v1/';

      const changeUrl = req.clone({ url: baseUrl + req.url });

      req = changeUrl;

      req = this.addJsonHeader(req);

      return next.handle(req).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
          console.log('error');
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log('error');
            setTimeout(() => {
              this.router.navigate(['auth/login']);
            }, 4000);
          } else if (err.status === 400) {
            console.log('error');
            setTimeout(() => {
              this.router.navigate(['auth/login']);
            }, 4000);
          } else if (err.status === 500) {
            console.log('error');
          } else if (err.status === 501) {
            console.log('error');
          }
        }
      });
    }
  }

  private addJsonHeader(request: HttpRequest<any>): HttpRequest<any> {

    if (request.headers.has('Content-Type')) {
      return;
    }

    return request.clone({
      headers: request.headers.append('Content-Type', 'application/json'),
    });
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {

    let userToken: string;

    return request.clone({
      headers: request.headers.append('Authorization', `Bearer ${userToken}`),
    });
  }
}
