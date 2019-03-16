import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserComponent } from './User/user/user.component';



const  routes : Routes=[
  {path:'',component: HomeComponent},
  {path:'Home',component: HomeComponent},
  {path:'User',component:UserComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
