import { Component } from '@angular/core';
import * as Firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = environment.title;
    lista = []

    constructor() {
        Firebase.initializeApp(environment.firebase);

        Firebase.database().ref('list').once('value').then(snap => {
            console.log(snap.val())
            this.lista = snap.val()
        })
    }
}
