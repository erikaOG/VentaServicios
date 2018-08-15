import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformacionEmpresaService {

  private empresa: AngularFirestoreDocument;

  constructor(private readonly afs: AngularFirestore) {
    /*En este momento utilizamos la variable usuarioLogiado*/
    this.empresa = this.afs.doc(localStorage.getItem('empresa'));
   }

   obtenerEmpresa() {
    
    return this.afs.collection('empresa').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }
  }

