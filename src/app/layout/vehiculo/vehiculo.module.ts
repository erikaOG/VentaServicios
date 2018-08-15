import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConsultarVehiculoComponent } from './consultar-vehiculo/consultar-vehiculo.component';
import { InformacionVehiculoComponent } from './informacion-vehiculo/informacion-vehiculo.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PageHeaderModule,
    NgSelectModule,
    FormsModule
  ],
  declarations: [CrearVehiculoComponent, ConsultarVehiculoComponent, InformacionVehiculoComponent]
})
export class VehiculoModule { }
