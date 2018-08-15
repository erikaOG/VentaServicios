import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';
import { VehiculoService } from '../../../servicios/vehiculo/vehiculo.service';


@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.scss'],
  animations: [routerTransition()]
})
export class CrearVehiculoComponent implements OnInit {


  personas: Observable<any[]>;
  vehiculoForm = this.fb.group({
    placa: ['', Validators.required],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    color: ['', Validators.required],
    numeroMotor: ['', Validators.required],
    numeroChasis: ['', Validators.required],
    anioFabricacion: ['', Validators.required]
   
  })

  constructor
  (
    private fb: FormBuilder, 
    private personaService: PersonaService,
    private vehiculoService: VehiculoService
  ) { 

    this.obtenerPersonas()
  }

  ngOnInit() {
  }
  guardarVehiculo(){
    this.vehiculoService.crearVehiculo(this.vehiculoForm.value).then(vehiculo=>
      {
        console.log(vehiculo);
        this.vehiculoForm.reset()
      }, error=>{
        console.log(error)}
      )
  }
  obtenerPersonas() {
    this.personas =this.personaService.obtenerPersonas()
  }

}
