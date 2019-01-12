import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HouseComponent} from './house.component';
import {BedroomComponent} from './bedroom/bedroom.component';
import {KitchenComponent} from './kitchen/kitchen.component';

const routes: Routes = [
  {path: '', component: HouseComponent, children: [
      {path: 'bedroom', component: BedroomComponent},
      {path: 'kitchen', component: KitchenComponent}
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HouseRoutingModule { }
