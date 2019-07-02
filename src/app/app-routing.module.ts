import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EatComponent } from './eat/eat.component';
import { DrinkComponent } from './drink/drink.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'eat', component: EatComponent },
  { path: 'drink', component: DrinkComponent },
  { path: 'home', component: LandingComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
