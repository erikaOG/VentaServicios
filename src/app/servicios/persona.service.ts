import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personasCollection: AngularFirestoreCollection;
  private empresa: AngularFirestoreDocument;
  private personaDoc: AngularFirestore
  personas: Observable<any[]>;
  persona: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.personasCollection = afs.collection('persona');
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));

  }

  crearPersona(persona) {
    const id = this.afs.createId();
   return this.empresa.collection('personas').doc(id).set(persona);
  }

  obtenerPersonas() {
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    return this.empresa.collection('personas').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  obtenerUnaPersona(id){
   return this.empresa.collection('personas').doc(id).valueChanges()
  }
}
