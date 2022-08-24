import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstallationsComponent} from '../app/installations/installations.component';
import {HomeComponent} from '../app/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'instalacion',component:InstallationsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
