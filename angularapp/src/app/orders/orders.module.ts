import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '../shared/utility/utility.module';



@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    RouterModule,
    UtilityModule
  ]
})
export class OrdersModule { }
