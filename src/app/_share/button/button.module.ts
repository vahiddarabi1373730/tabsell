import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "./button.component";
import {MatButtonModule, MatFabButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MatFabButton,
    MatButtonModule,
    MatIconModule
  ],
  exports:[ButtonComponent]
})
export class ButtonModule { }
