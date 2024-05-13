import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Button, FormConfig, SubmitForm} from "../../_models/models.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrl: './form-generator.component.scss'
})
export class FormGeneratorComponent implements OnInit{

  @Input() disabled!:boolean
  @Output() formReady=new EventEmitter<FormGroup>()
  @Output() submitFormEmitter=new EventEmitter<SubmitForm>()
  @Input() formConfig!:FormConfig
  formGroup:FormGroup=new FormGroup<any>({});
  buildControl(controls:FormConfig['controls']){
    Object.keys(controls).forEach(control=>{
      const configControl=controls[control]
      this.formGroup.addControl(configControl.name,new FormControl(configControl.value,configControl.validators))
      this.formReady.emit(this.formGroup)
    })
  }

  submitForm(operationType:string){
    this.submitFormEmitter.emit({operationType:operationType,form:this.formGroup})
  }

  createButton(type:string,formConfig:FormConfig):Button{
    let button!:Button
    switch (type){
      case "add":
        button= {
          color:formConfig.add?.value,
          text:formConfig.add?.label as string,
          operation:()=>{
            this.submitForm('add')
          }
        }
        break
      case "edit":
        button= {
          color:formConfig.edit?.value,
          text:formConfig.edit?.label as string,
          operation:()=>{
            this.submitForm('edit')
          }
        }
        break
      case "delete":
        button= {
          color:formConfig.delete?.value,
          text:formConfig.delete?.label as string,
          operation:()=>{
            this.submitForm('delete')
          }
        }
        break

    }
    return button
  }
  ngOnInit() {
    this.buildControl(this.formConfig.controls)
  }
}
