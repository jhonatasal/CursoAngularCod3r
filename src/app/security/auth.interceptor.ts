import { LoginService } from './login/login.service';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/Http";
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class AuthInteceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService: LoginService = this.injector.get(LoginService);
        if (loginService.isLoggedIn()) {
            const authRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${loginService.user.acessToken}` } });
            return next.handle(authRequest)
        } else {
            return next.handle(request);
        }
    }
}