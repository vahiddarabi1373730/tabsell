import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGeneratorComponent} from './form-generator.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "./_components/checkbox/checkbox.module";
import {InputModule} from "./_components/input/input.module";


@NgModule({
  declarations: [
    FormGeneratorComponent,
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        ReactiveFormsModule,
        CheckboxModule,
        InputModule

    ],
  exports: [
    FormGeneratorComponent,
  ]
})
export class FormGeneratorModule { }
