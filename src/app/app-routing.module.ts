import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstallationsComponent} from '../app/installations/installations.component';
import {HomeComponent} from '../app/home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'instalacion',component:InstallationsComponent},
  {path:'contacto',component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
