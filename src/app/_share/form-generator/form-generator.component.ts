import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormConfig, SubmitForm} from "../../_models/models.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrl: './form-generator.component.scss'
})
export class FormGeneratorComponent implements OnInit{

  @Output() submitFormEmitter=new EventEmitter<SubmitForm>()
  @Input() formConfig!:FormConfig
  formGroup:FormGroup=new FormGroup<any>({});
  buildControl(controls:FormConfig['controls']){
    Object.keys(controls).forEach(control=>{
      const configControl=controls[control]
      this.formGroup.addControl(configControl.name,new FormControl(configControl.value,configControl.validators))
    })
  }

  submitForm(operationType:string){
    this.submitFormEmitter.emit({operationType:operationType,form:this.formGroup})
  }
  ngOnInit() {
    console.log(this.formConfig)
    this.buildControl(this.formConfig.controls)
  }
}
