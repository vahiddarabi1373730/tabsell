import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import {MatCheckbox} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    MatCheckbox
  ],
  exports: [
    CheckboxComponent
  ]
})
export class CheckboxModule { }
