import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogRef} from "@angular/cdk/dialog";
import {SubmitForm} from "../../../_models/models.interface";
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
    const id=this.data.id
    let oldList=this.listTodosService.listTodos.getValue()
    if(id){
      const editList=submitForm.form.controls['editList'].value
      const index=oldList.findIndex(l=>l.value===id)
      oldList.splice(index,1)
      oldList.splice(index,0,{value:id,label:editList})
    }else{
      const newList=submitForm.form.controls['newList'].value
      oldList=[...oldList,{label:newList,value:Math.random()}]
    }
    this.listTodosService.listTodos.next(oldList)
  }
}
