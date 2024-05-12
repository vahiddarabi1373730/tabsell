import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import {AgGridAngular} from "ag-grid-angular";



@NgModule({
  declarations: [GridComponent],
  imports: [CommonModule, AgGridAngular],
  exports: [GridComponent],
})
export class GridModule {}
