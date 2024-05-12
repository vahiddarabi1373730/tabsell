import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ControlConfig} from "../../../../_models/models.interface";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements OnInit{
  @Input() formGroup!:FormGroup
  @Input() controlConfig!:ControlConfig
  formControl!:FormControl

  ngOnInit() {
    this.formControl=this.formGroup.controls[this.controlConfig.name] as FormControl
  }
}
