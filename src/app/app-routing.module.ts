import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstallationsComponent} from '../app/installations/installations.component';
import {HomeComponent} from '../app/home/home.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { LoginComponent } from './login/login.component';
import{PacientComponent} from './pacient/pacient.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'instalacion',component:InstallationsComponent},  
  {path:'professionals',component:ProfessionalsComponent},
  {path:'login', component:LoginComponent},
  {path:'pacient', component:PacientComponent},
  {path:'doctor', component:DoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
