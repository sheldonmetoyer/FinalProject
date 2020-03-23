import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewticketComponent } from './newticket/newticket.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'newticket', component: NewticketComponent},
  { path: 'newcustomer', component: NewcustomerComponent},
  { path: 'view', component: ViewticketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
