import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InformationsComponent} from "./component/informations/informations.component";
import {FirstComponent} from "./component/first/first.component";
import {AcceuilComponent} from "./component/acceuil/acceuil.component";
import {ReservationComponent} from "./component/reservation/reservation.component";
import {MenuComponent} from "./component/menu/menu.component";

const routes: Routes = [
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'information', component: InformationsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'reservation', component: ReservationComponent},
  { path: '',   redirectTo: '/acceuil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
