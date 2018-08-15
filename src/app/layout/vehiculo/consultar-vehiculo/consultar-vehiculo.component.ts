import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { VehiculoService } from '../../../servicios/vehiculo/vehiculo.service';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-vehiculo',
  templateUrl: './consultar-vehiculo.component.html',
  styleUrls: ['./consultar-vehiculo.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarVehiculoComponent implements OnInit {

  vehiculos: Observable<any[]>;

  constructor(private vehiculoService: VehiculoService) { 
    this.obtenerVehiculos()
  }

  ngOnInit() {
  }

  obtenerVehiculos() {
    this.vehiculos =this.vehiculoService.obtenerVehiculos();
    this.vehiculos.forEach(element => {
      console.log(element)
    });
  }

}
