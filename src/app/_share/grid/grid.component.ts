import {Component, EventEmitter, Input, Output} from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import {RowSelectedEvent} from "@ag-grid-community/core";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  private _gridOptions!: GridOptions;
  get gridOptions() {
    return this._gridOptions;
  }
  @Input() set gridOptions(gridOptions: GridOptions) {
    this._gridOptions=gridOptions
  }
  @Output() rowSelected=new EventEmitter()

  onGridReady(params:any) {
    params.api.sizeColumnsToFit();
  }

}
