import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatButtonModule, MatCheckboxModule} from'@angular/material';
import {MatCardModule} from'@angular/material/card';
import{MatToolbarModule}from'@angular/material/toolbar';
import {MatIconModule}from'@angular/material/icon';
import{MatDialogModule}from'@angular/material/dialog';
import {MatTooltipModule} from'@angular/material/tooltip';
import {MatFormFieldModule} from'@angular/material/form-field';
import{MatStepperModule}from'@angular/material/stepper';
import {MatInputModule}from'@angular/material/input';
import {MatSelectModule}from'@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';





@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule,MatCheckboxModule,MatCardModule,MatToolbarModule,
    MatIconModule,MatDialogModule,MatTooltipModule,MatFormFieldModule,MatStepperModule,
    MatInputModule,MatSelectModule,FormsModule, ReactiveFormsModule
  ],
  exports:[CommonModule, MatButtonModule,MatCheckboxModule,MatCardModule,MatToolbarModule,
    MatIconModule,MatDialogModule,MatTooltipModule,MatFormFieldModule,MatStepperModule,
    MatInputModule,MatSelectModule,FormsModule, ReactiveFormsModule
  ]
})
export class MaterialModule { }
