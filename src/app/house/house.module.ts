import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BedroomComponent} from './bedroom/bedroom.component';
import {HouseComponent} from './house.component';
import {KitchenComponent} from './kitchen/kitchen.component';
import {HouseRoutingModule} from './house-routing.module';

@NgModule({
  declarations: [
    HouseComponent,
    BedroomComponent,
    KitchenComponent
  ],
  imports: [
    CommonModule,
    HouseRoutingModule
  ]
})
export class HouseModule { }
