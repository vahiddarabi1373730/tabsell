import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from "./input.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatIconButton,
    MatInputModule

  ],
  exports:[InputComponent]
})
export class InputModule { }
