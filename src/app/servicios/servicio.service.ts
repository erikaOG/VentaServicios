import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private servicios: AngularFirestoreDocument;
  private empresa: AngularFirestoreDocument;

  constructor(private readonly afs: AngularFirestore) { 
    this.servicios = this.afs.doc(localStorage.getItem('servicios'));
  }
 
  obtenerServicios(empresa) {
    this.empresa = this.afs.doc('empresa/'+empresa);
    return this.empresa.collection('servicios').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

 
  obtenerUnaServicios(id){
    return this.empresa.collection('servicios').doc(id).valueChanges()
   }

   obtenerUnaEmpresa(id){
     
    return this.afs.collection('empresa').doc(id).valueChanges()
   }
}
