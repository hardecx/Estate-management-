import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable()
export class InterceptorServices implements HttpInterceptor {
    value:any;
    constructor(
        private shared: ApiService,
      ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const idToken =  sessionStorage.getItem('jwt');
       // this.value = this.shared.getInfo().value

        if (idToken) {
            const customReq = request.clone({
                headers: request.headers.set("Authorization", " Bearer " +idToken)
            });
            return next.handle(customReq);
        }
        else {
           //  sessionStorage.setItem('jwt',environment.token);
            return next.handle(request);
        }
    }
}