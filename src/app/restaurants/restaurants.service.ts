import { ErroHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { ErrorHandler, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from './restaurant/restaurant.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ReviewsComponent } from 'app/restaurant-details/reviews/reviews.component';
import { MenuItem } from 'app/restaurant-details/menu-item/menu-item.model';


@Injectable()

export class RestaurantService {

    constructor(private http: Http) {
    }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErroHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`).
            map(response => response.json())
            .catch(ErroHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).
            map(response => response.json())
            .catch(ErroHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).
            map(response => response.json())
            .catch(ErroHandler.handleError)
    }
}