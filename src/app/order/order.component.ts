import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[]=[
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Debito', value: 'DEB'},
    {label: 'Refeição', value: 'REF'}
  ]


  constructor() { }

  ngOnInit() {
  }

}
