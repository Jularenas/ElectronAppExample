import { Component, OnInit } from '@angular/core';
import {CrudService} from '../services/crud.service';
//import { runInThisContext } from 'vm';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public patients=[];


  constructor(public _crudService:CrudService) {

  }

  ngOnInit() {

    this._crudService.getPatients().subscribe((patientsSnapshot) =>{
      this.patients=[];
      patientsSnapshot.forEach((patientData:any)=>{
        this.patients.push({
          id: patientData.payload.doc.id,
          data: patientData.payload.doc.data()
        });
      });
    });

  }

}
