import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private storageService: StorageService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.storageService.getToken();

    const baseUrl = 'http://87.250.59.231:3000';

    if(token) {
      if (request.url.includes(baseUrl + "/photos")) {
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + token,
            'Accept': 'application/json',
          }
        });
      }
      else {
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
      }
    }
    else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    }

    return next.handle(request);
  }

}
