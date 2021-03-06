import { AuthInteceptor } from './../security/auth.interceptor';
import { LeaveOrderGuard } from './../order/leave-order.guard';
import { LoggedInGuard } from './../security/loggedin.guard';
import { LoginService } from './../security/login/login.service';
import { NotificationService } from './messages/notification.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { OrderService } from './../order/order.service';
import { RestaurantService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-details/shopping-cart/shopping-cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/Http';


@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [InputComponent, RadioComponent,
        RatingComponent, FormsModule,
        ReactiveFormsModule, CommonModule, SnackbarComponent]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService,
                RestaurantService,
                OrderService,
                NotificationService,
                LoginService,
                LoggedInGuard,
                LeaveOrderGuard,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInteceptor, multi: true }]
        }
    }
}