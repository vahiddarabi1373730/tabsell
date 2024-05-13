import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Todo} from "../../../_models/models.interface";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges{
  @Input()  dataSource:any[]=[]
  @Input() displayedColumns!:string[]
  @Output() selectedRow=new EventEmitter()
  click(element:any){
    this.selectedRow.emit(element)
  }

  ngOnChanges() {
  }

}
