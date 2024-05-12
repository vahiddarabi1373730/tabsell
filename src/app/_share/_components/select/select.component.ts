import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ConfigSelect, ValueLabel} from "../../../_models/models.interface";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  @Output() changeSelect=new EventEmitter<string>()
  @Input() config!:BehaviorSubject<ValueLabel[]>
}
