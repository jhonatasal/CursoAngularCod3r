import { CartItem } from './../restaurant-details/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Debito', value: 'DEB' },
    { label: 'Refeição', value: 'REF' }
  ]


  constructor(private orderService: OrderService, private router: Router) { }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }
  ngOnInit() {
  }

  cartItems() {
    return this.orderService.cartItems();
  }


  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }
  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }
  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe(
      (orderId: string) => {
        this.router.navigate(['/order-summary']);
        console.log(`Compra concluida: ${orderId}`);
        this.orderService.clear();
      })
  }
}
