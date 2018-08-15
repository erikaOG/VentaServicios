import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';



const routes: Routes = [
  {
    path: 'crearvehiculo',
    component: CrearVehiculoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
