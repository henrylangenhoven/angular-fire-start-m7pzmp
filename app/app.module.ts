import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const config = {  apiKey: 'AIzaSyC4r9NwQAMsqhWLaaLrjhkNpTzhPEofazg',
    authDomain: 'delta-bravo-279f7.firebaseapp.com',
    databaseURL: 'https://delta-bravo-279f7.firebaseio.com',
    projectId: 'delta-bravo-279f7',
    storageBucket: 'delta-bravo-279f7.appspot.com',
    messagingSenderId: '583373724996',
    appId: '1:583373724996:web:920f639e2ab336df534b11',
    measurementId: 'G-TYXW8X19RT',
};

@NgModule({
  imports:      [ 
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
