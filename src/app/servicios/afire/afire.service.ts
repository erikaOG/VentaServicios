import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AfireService {

  constructor(private afs: AngularFirestore,) { }

  paginate (limit: number, last: string, collection: string):  Observable<DocumentChangeAction<any>[]> {
    return this.afs.collection(collection, (ref) => (
     ref
       .where('id', '<', last)
       .orderBy('id', 'desc')
       .limit(limit)
    )).snapshotChanges();
 }


}
