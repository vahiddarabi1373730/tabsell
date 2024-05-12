import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ControlConfig, FormConfig} from "../../../../_models/models.interface";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit{


  @Input() formGroup!:FormGroup
  @Input() controlConfig!:ControlConfig
  formControl!:FormControl


  ngOnInit() {
    console.log(this.controlConfig.style?.width)
    this.formControl=this.formGroup.controls[this.controlConfig.name] as FormControl
  }
}
