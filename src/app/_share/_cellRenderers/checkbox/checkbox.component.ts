import { ICellRendererParams } from "@ag-grid-community/core";
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements ICellRendererAngularComp{
  params!:ICellRendererParams

  agInit(params: ICellRendererParams) {
    this.params=params
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;

  }






}
