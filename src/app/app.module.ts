import { RatingComponent } from './shared/rating/rating.component';
import { DeliveryCostComponent } from './order/delivery-cost/delivery-cost.component';
import { OrderService } from './order/order.service';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { RadioComponent } from './shared/radio/radio.component';
import { ShoppingCartService } from './restaurant-details/shopping-cart/shopping-cart.service';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { MenuItemComponent } from './restaurant-details/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-details/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { RestaurantService } from './restaurants/restaurants.service';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './shared/input/input.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RestaurantService, ShoppingCartService, OrderService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
