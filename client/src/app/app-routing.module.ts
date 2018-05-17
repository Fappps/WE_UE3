import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { LoginGuard } from './login.guard';
import { OptionsComponent } from './components';

const routes: Routes = [  
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    redirectTo: ""
  },
  {
    path: "overview",
    component: OverviewComponent,
    canActivate: [LoginGuard]
  },  
  {
    path: "options",
    component: OptionsComponent,
    canActivate: [LoginGuard]
  },  
  {
    path: "details",
    component: OverviewComponent,
    canActivate: [LoginGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
