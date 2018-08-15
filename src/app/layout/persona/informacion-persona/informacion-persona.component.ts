import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-informacion-persona',
  templateUrl: './informacion-persona.component.html',
  styleUrls: ['./informacion-persona.component.scss'],
  animations: [routerTransition()]
})
export class InformacionPersonaComponent implements OnInit {
  id: any
  persona: Observable<any>;

  constructor(private route: ActivatedRoute, private personaService: PersonaService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.persona = this.personaService.obtenerUnaPersona(this.id)
    console.log(this.persona)
  }

  ngOnInit() {
  }

 

}
