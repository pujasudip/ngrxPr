import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HouseComponent} from './house/house.component';

const routes: Routes = [
  {path: 'house', loadChildren: './house/house.module#HouseModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
