import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private persona: AngularFirestoreDocument;
  private empresa: AngularFirestoreDocument;
  private vehiculo: AngularFirestoreDocument;
  private usuarioLogiado: AngularFirestoreDocument;

  constructor(private readonly afs: AngularFirestore) {
    /*Mantenemos la variable empresa para utilizar despues*/
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
    /*En este momento utilizamos la variable usuarioLogiado*/
    this.usuarioLogiado = this.afs.doc('usuario/'+localStorage.getItem('usuarioId'));
  }

  crearVehiculo(vehiculo) {
    
    const id = this.afs.createId();
    return this.usuarioLogiado.collection('vehiculos').doc(id).set(vehiculo)
  }

  obtenerVehiculos() {
    this.usuarioLogiado = this.afs.doc('usuario/'+localStorage.getItem('usuarioId'));
    return this.usuarioLogiado.collection('vehiculos').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  obtenerUnVehiculo(id) {
    return this.empresa.collection('vehiculos').doc(id).valueChanges()
  }
}
