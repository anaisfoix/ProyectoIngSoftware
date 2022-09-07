import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstallationsComponent} from '../app/installations/installations.component';
import {HomeComponent} from '../app/home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProfessionalsComponent } from './professionals/professionals.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'instalacion',component:InstallationsComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'professionals',component:ProfessionalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
