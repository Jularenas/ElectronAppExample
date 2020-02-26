import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{AngularFireModule} from 'angularfire2';
import{AngularFirestoreModule} from 'angularfire2/firestore';

import {environment} from '../environments/environment';
import { PatientsComponent } from './patients/patients.component';
import {CrudService} from './services/crud.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    EditPatientComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [EditPatientComponent],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
