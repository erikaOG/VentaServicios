import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';
import { InformacionPersonaComponent } from './informacion-persona/informacion-persona.component';



const routes: Routes = [
  {
    path: 'crearpersona',
    component: CrearPersonaComponent
  },
  {
    path: 'consultarpersona',
    component: ConsultarPersonaComponent
  },
  {
    path: 'informacionpersona/:id',
    component: InformacionPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
