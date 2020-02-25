import { Injectable } from '@angular/core';
// Importamos angular firestore y angular collection
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Injectable()
export class CrudService {
  constructor( private afs: AngularFirestore ) {
    // Esta impresion es opcional, la agrego para confirmar que el servicio funcione correctamente
    console.log('Service CRUD On');
  }


  public createPatient(data: {
    nombre: string,
    documento: string,
    ciudad: string,
    url: string}) {return this.afs.collection('patients').add(data);
  }

  public getPatient(documentId: string) {
    return this.afs.collection('patients').doc(documentId).snapshotChanges();
  }

  public getPatients() {
    return this.afs.collection('patients').snapshotChanges();
  }

  public updatePatient(documentId: string, data: {
    nombre?: string,
    documento?: string,
    ciudad?: string,
    url?: string}) {return this.afs.collection('patients').doc(documentId).set(data);
  }

  public deletePatient(documentId: string) {
    return this.afs.collection('patients').doc(documentId).delete();
  }
}
