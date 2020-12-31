import { trigger, state, transition, style, animate } from '@angular/animations';
import { MenuItem } from './menu-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])]
})

export class MenuItemComponent implements OnInit {

  menuItemstatus: string = 'ready'


  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  emitAddEvent() {
    this.add.emit(this.menuItem);
  }
}
