import {Component} from '@angular/core';
import {GridOptions} from "ag-grid-community";
import {
  Button,
  ConfigSelect,
  ControlConfig,
  FormConfig,
  SubmitForm,
  Todo,
  ValueLabel
} from "../_models/models.interface";
import {ColumnTodo, formConfig} from "../_share/_values/values";
import {FormGroup, Validators} from "@angular/forms";
import {RowSelectedEvent} from "@ag-grid-community/core";
import {CheckboxComponent} from "../_share/_cellRenderers/checkbox/checkbox.component";
import {MatDialog,} from '@angular/material/dialog';
import {DialogComponent} from "../_share/_components/dialog/dialog.component";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ListTodosService} from "../_share/_services/list-todos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-todos',
  templateUrl: './main-todos.component.html',
  styleUrl: './main-todos.component.scss'
})
export class MainTodosComponent {

  constructor(public dialog: MatDialog,private listTodosService:ListTodosService,private router:Router) {
  }
  components={
    "CheckboxComponent":CheckboxComponent
  }
  rowSelected!:Todo
  form!:FormGroup;
  gridOptions: GridOptions<Todo> = {
    rowData: [],
    columnDefs: ColumnTodo,
    components:this.components
  };

  configSelect:BehaviorSubject<ValueLabel[]>=this.listTodosService.listTodos

  createList:Button={
    text:"ایجاد لیست جدید",
    hasIcon:true,
    color:"primary",
    iconName:"add",
    operation:()=>{
    this.dialog.open(DialogComponent,{
      width:"800px",
      height:"100px",
      data:{

        add:{value:"primary",label:"لیست جدید"},
        controls:{
           newList:{value:"",name:"newList",validators: {required:Validators.required},type:'input',controlType:"input",label:"لیست جدید",style:{width:"800px"}} as ControlConfig
        }
      } as FormConfig
    })
    }
  }

  changeSelect(value:string){
    this.router.navigate([`other-list/${value}`])
  }
  formConfig=formConfig

  submitForm(submitForm:SubmitForm){
    const rowData=this.gridOptions.rowData as Todo[]
    this.form=submitForm.form
    switch (submitForm.operationType){
      case 'add':
        this.gridOptions={...this.gridOptions,rowData:[...this.gridOptions.rowData as Todo[], {...this.form.value,id:Math.random()}] }
        break
      case "edit":
        this.doOperation('edit',submitForm.form.value,rowData)
        break
      case "delete":
        this.doOperation('delete',submitForm.form.value,rowData)
    }
    this.form.reset()
  }

  doOperation(operationType:string,formValue:Todo,rowData:Todo[]){
    const newRows:Todo[]=[]
    rowData?.forEach((row:Todo)=>{
      if(operationType==='delete'){
        console.log('here')
        if(row.id===formValue.id){
          return
        }else{
          newRows.push(row)
        }
      }else{
        if(row.id===formValue.id){
          newRows.push(formValue)
        }else{
          newRows.push(row)
        }
      }

    })
    this.gridOptions={...this.gridOptions,rowData:newRows}
  }

  onRowSelected(event:RowSelectedEvent){
    const rowSelected:Todo=event.api.getSelectedRows()[0]
    this.rowSelected=event.api.getSelectedRows()[0]
    this.form.setValue({
      date:rowSelected.date,
      description:rowSelected.description,
      title:rowSelected.description,
      completed:rowSelected.completed,
      id:rowSelected.id
    } as Todo)
  }

  protected readonly Subject = Subject;
}
