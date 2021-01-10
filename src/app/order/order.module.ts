import { LeaveOrderGuard } from './leave-order.guard';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { DeliveryCostComponent } from './delivery-cost/delivery-cost.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';
import { NgModule } from "@angular/core";


const ROUTES: Routes = [
    { path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard] }
]

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {

}