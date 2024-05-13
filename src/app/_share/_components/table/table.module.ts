import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatTableModule} from "@angular/material/table";
import {TranslateHeaderModule} from "../../_pipes/translate-header/translate-header.module";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    TranslateHeaderModule,
    MatCheckboxModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
