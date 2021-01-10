import { Injector, Injectable } from '@angular/core';
import { LoginService } from './../security/login/login.service';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";
@Injectable()
export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

    constructor(private injector: Injector) { }

    getLoginService(): LoginService {
        return this.injector.get(LoginService);
    }

    canDeactivate(orderComponent: OrderComponent,
        activatedRoute: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot): boolean {
        const loginService: LoginService = this.getLoginService();
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm(`${loginService.user.name}, você tem certeza que deseja desistir da sua compra?`)
        } else {
            return true;
        }
    }


}