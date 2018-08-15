import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../../servicios/vehiculo/vehiculo.service';

@Component({
  selector: 'app-informacion-vehiculo',
  templateUrl: './informacion-vehiculo.component.html',
  styleUrls: ['./informacion-vehiculo.component.scss'],
  animations: [routerTransition()]
})
export class InformacionVehiculoComponent implements OnInit {

  id: any
  vehiculo: Observable<any>;

  constructor(private route: ActivatedRoute, private vehiculoService: VehiculoService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.vehiculo = this.vehiculoService.obtenerUnVehiculo(this.id)
  }

  ngOnInit() {
  }

}
