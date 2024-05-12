import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogRef} from "@angular/cdk/dialog";
import {SubmitForm, ValueLabel} from "../../../_models/models.interface";
import {ListTodosService} from "../../_services/list-todos.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  protected _data;
  constructor(@Inject(MAT_DIALOG_DATA) protected data: any,private DialogRef:DialogRef,private listTodosService:ListTodosService) {
      this._data=data
  }

  submit(submitForm:SubmitForm){
    this.DialogRef.close()
    console.log(submitForm)
    const newValues:ValueLabel[]=[...this.listTodosService.listTodos.getValue(),{label:submitForm.form.controls['newList'].value,value:Math.random()}]
    this.listTodosService.listTodos.next(newValues)
  }
}
