import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, switchMap, catchError } from 'rxjs';
import { Auth } from '../service/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
constructor(private authService : Auth) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {



    if(!request.url.includes("/login") && !request.url.includes("/register")){
      let newRequest = request.clone({
        headers : request.headers.set('Authorization','Bearer ' +this.authService.accessToken)

      })


      return next.handle(newRequest).pipe(
        catchError(err=> {
            if(err.status==401){
                this.authService.logout();
            }
          return throwError(err.message)

        })
      );

    }


    else return next.handle(request);



  }

}
