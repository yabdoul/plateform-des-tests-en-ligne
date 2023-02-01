import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthpageComponent } from './authpage/authpage.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  {path:'main', component:MainpageComponent} , 
  {path:'Login', component:AuthpageComponent} , 
  {path:'dashboard', component:DashboardComponent} , 
  {path:'tests', component:TestsComponent} , 
  {path:'new-test', component:CreatePageComponent} , 

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
