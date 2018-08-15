import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../../servicios/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-informacion-servicio',
  templateUrl: './informacion-servicio.component.html',
  styleUrls: ['./informacion-servicio.component.scss'],
  animations: [routerTransition()]
})
export class InformacionServicioComponent implements OnInit {
  id: any
  servicios: Observable<any>;

  constructor(private route: ActivatedRoute, private servicioService: ServicioService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.servicios = this.servicioService.obtenerServicios(this.id)
    console.log(this.servicios)
  }
    
  ngOnInit() {
  }

}
