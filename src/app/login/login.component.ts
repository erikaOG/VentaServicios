import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    usuario: any = { email: 'gabrielsalazar@outlook.com', password: '123456' }
    private itemDoc: AngularFirestoreDocument;
    item: Observable<any>;

    constructor(public router: Router, public afAuth: AngularFireAuth, public db: AngularFirestore) { }

    ngOnInit() {
       
     }

onLoggedin() {
    console.log(this.usuario)
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then((usuario: any) => {
            this.itemDoc = this.db.doc('usuario/'+this.afAuth.auth.currentUser.uid);
            this.item = this.itemDoc.valueChanges();
            this.item.subscribe(usuario=>{
                console.log(usuario)
                localStorage.setItem('usuario', usuario.nombre);
                localStorage.setItem('usuarioId', this.afAuth.auth.currentUser.uid);
                localStorage.setItem('empresa', usuario.empresa.path);
                localStorage.setItem('isLoggedin', 'true');
              
            })
        
        }, error => {
            console.log('Existió un error')
        })
      
}

imprimir(item){
    console.log(item)
}
}
