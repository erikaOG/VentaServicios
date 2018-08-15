import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearServicioComponent } from './crear-servicio/crear-servicio.component';
import { ConsultarServicioComponent } from './consultar-servicio/consultar-servicio.component';
import { InformacionServicioComponent } from './informacion-servicio/informacion-servicio.component';


const routes: Routes = [
  {
    path: 'crearservicio',
    component: CrearServicioComponent
  },
  {
    path: 'consultarservicio/:id',
    component: ConsultarServicioComponent
  },
  {
    path: 'informacionservicio/:id',
    component: InformacionServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
