import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { AboutComponent } from './components/about/about.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/about/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'order', component: OrderComponent },
  { path:'about', component: AboutComponent },
  { path:'weekly', component: WeeklyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
