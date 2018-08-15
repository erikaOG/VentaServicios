import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { PersonaService } from '../../../servicios/persona.service';

@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.scss'],
  animations: [routerTransition()]
})
export class ConsultarPersonaComponent implements OnInit {

  personas: Observable<any[]>;


  constructor(private personaService: PersonaService) {

  }

  ngOnInit() {
    this.obtenerPersonas()
  }

  obtenerPersonas() {
    this.personas = this.personaService.obtenerPersonas()
  }

  verPersona(persona) {
    console.log(persona)
  }

}
