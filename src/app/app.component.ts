import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    items: Observable<any[]>;

    constructor(db: AngularFirestore) {


        
       


    }


    ngOnInit() {
    }

    timbrar(id) {
        console.log(id)
    }
}
