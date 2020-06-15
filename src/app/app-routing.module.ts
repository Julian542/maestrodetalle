import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TablapersonasComponent } from './components/tablapersonas/tablapersonas.component';
import { TabladomicilioComponent } from './components/tabladomicilio/tabladomicilio.component';


const routes: Routes = [
  {path:'', component : TablapersonasComponent},
  {path:'domicilios/:id', component : TabladomicilioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
