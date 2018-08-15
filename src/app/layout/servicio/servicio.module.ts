import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearServicioComponent } from './crear-servicio/crear-servicio.component';
import { ConsultarServicioComponent } from './consultar-servicio/consultar-servicio.component';
import { InformacionServicioComponent } from './informacion-servicio/informacion-servicio.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CrearServicioComponent, ConsultarServicioComponent, InformacionServicioComponent]
})
export class ServicioModule { }
