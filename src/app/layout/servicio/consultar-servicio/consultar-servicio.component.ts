import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../../servicios/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-servicio',
  templateUrl: './consultar-servicio.component.html',
  styleUrls: ['./consultar-servicio.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarServicioComponent implements OnInit {
  id: any
  servicios: Observable<any[]>;
  empresa: any = localStorage.getItem('empresa') //obtener path de la empresa
  empresaSeleccionada: Observable<any>;

  constructor(private route: ActivatedRoute, private servicioService: ServicioService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.servicios = this.servicioService.obtenerServicios(this.id)
    this.empresaSeleccionada = this.servicioService.obtenerUnaEmpresa(this.id)
    this.empresaSeleccionada.subscribe(empresa=>{
      console.log('sasa')
      console.log(empresa)
    })
    console.log(this.servicios)
    console.log(this.empresaSeleccionada)
  }

  ngOnInit() {
    
  }

  verServicios(servicios) {
    console.log(servicios)
  }


}
