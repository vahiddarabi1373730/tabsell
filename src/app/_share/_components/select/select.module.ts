import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";



@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelect,
    MatOption,
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
