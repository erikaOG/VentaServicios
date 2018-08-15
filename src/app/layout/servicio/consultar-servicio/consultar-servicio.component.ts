import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../../servicios/servicio.service';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

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
  servicioSeleccionado:any
  servicioForm = this.fb.group({
    vehiculo: [{}, Validators.required]
  })

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private servicioService: ServicioService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.servicios = this.servicioService.obtenerServicios(this.id)
    this.empresaSeleccionada = this.servicioService.obtenerUnaEmpresa(this.id)
    this.empresaSeleccionada.subscribe(empresa=>{
      console.log(empresa)
    })
    console.log(this.servicios)
    console.log(this.empresaSeleccionada)
  }

  ngOnInit() {
    
  }

  seleccionarServicio(servicio){
    this.servicioSeleccionado = servicio
    console.log(this.servicioSeleccionado)
  }

  verServicios(servicios) {
    console.log(servicios)
  }


}
