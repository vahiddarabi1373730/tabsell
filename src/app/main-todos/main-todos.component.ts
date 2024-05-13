import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
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
import {Form, FormGroup, Validators} from "@angular/forms";
import {RowSelectedEvent} from "@ag-grid-community/core";
import {CheckboxComponent} from "../_share/_cellRenderers/checkbox/checkbox.component";
import {MatDialog,} from '@angular/material/dialog';
import {DialogComponent} from "../_share/_components/dialog/dialog.component";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ListTodosService} from "../_share/_services/list-todos.service";
import {Router} from "@angular/router";
import {CompletedTodoService} from "../_share/_services/completed-todo.service";
import {MainTodoService} from "../_share/_services/main-todo.service";
import {ButtonComponent} from "../_share/button/button.component";

@Component({
  selector: 'app-main-todos',
  templateUrl: './main-todos.component.html',
  styleUrl: './main-todos.component.scss'
})
export class MainTodosComponent implements OnInit{

  constructor(private cd:ChangeDetectorRef,private addToMainTodoService:MainTodoService, private completedTodoService:CompletedTodoService, public dialog: MatDialog, private listTodosService:ListTodosService, private router:Router) {
  }
  @ViewChild(ButtonComponent) buttonComponent!:ButtonComponent
  components={
    "CheckboxComponent":CheckboxComponent
  }
  private completed:Todo[]=[]
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
    if(value!=='completed-task'){
     this.router.navigate([`other-list/${value}`])
    }else{
       this.router.navigate(['completed-task'])
    }
  }
  formConfig=formConfig

  submitForm(submitForm:SubmitForm){
    const old=this.addToMainTodoService.mainTodo.getValue()
    const rowData=this.gridOptions.rowData as Todo[]
    this.form=submitForm.form
    if(submitForm.form.controls['completed'].value){
      this.addToCompletedList(submitForm)
    }
    switch (submitForm.operationType){
      case 'add':
        this.addToMainTodoService.mainTodo.next([...old,{...this.form.value,id:Math.random()}])
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
    this.buttonComponent.disabled=false
      console.log(this.buttonComponent.disabled)
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

  addToCompletedList(submitForm:SubmitForm){
    this.completed.push({...submitForm.form.value,select:""})
    this.completedTodoService.completedTodo.next(this.completed)
  }

  formReady(form:FormGroup){
      this.form=form
  }

  ngOnInit() {
    this.gridOptions={...this.gridOptions,rowData:[...this.addToMainTodoService.mainTodo.getValue()]}
    this.addToMainTodoService.mainTodo.subscribe(todo=>{
      if(this.gridOptions.rowData){
        this.gridOptions={...this.gridOptions,rowData:[...this.addToMainTodoService.mainTodo.getValue()]}
      }
    })
  }

}
