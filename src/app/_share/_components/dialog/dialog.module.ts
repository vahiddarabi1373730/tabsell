import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import {FormGeneratorModule} from "../../form-generator/form-generator.module";



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormGeneratorModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
