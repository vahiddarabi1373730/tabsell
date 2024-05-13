import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateHeaderPipe} from "./translate-header.pipe";



@NgModule({
  declarations: [TranslateHeaderPipe],
  imports: [
    CommonModule
  ],
    exports:[TranslateHeaderPipe]
})
export class TranslateHeaderModule { }
