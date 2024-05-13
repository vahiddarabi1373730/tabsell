import {Component, Input, OnDestroy} from '@angular/core';
import {formConfig} from "../_share/_values/values";
import {Button, ControlConfig, FormConfig, SubmitForm, Todo, ValueLabel} from "../_models/models.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, Subject, Subscription} from "rxjs";
import {FormGroup, Validators} from "@angular/forms";
import {ListTodosService} from "../_share/_services/list-todos.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../_share/_components/dialog/dialog.component";
import {MainTodoService} from "../_share/_services/main-todo.service";

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrl: './other-list.component.scss'
})
export class OtherListComponent implements OnDestroy{

  constructor(private addToMainTodoService:MainTodoService, private dialog:MatDialog, private router:Router, private listTodosService:ListTodosService, private activatedRoute:ActivatedRoute) {
    this.subscription=activatedRoute.params.subscribe((res:any)=>{
      this.id=res.id
    })
  }
  selectedRow!:Todo
  subscription:Subscription=new Subscription()
  id!:number
  form!:FormGroup;
  button:Button={
    hostClass:"lg",
    text:"بازگشت",
    color:"primary",
    iconName:"arrow_forward",
    hasIcon:true,
    operation:()=>{
      this.router.navigate([''])
    }
  }

  addToMainList:Button={
    hostClass:"lg",
    text:"افزودن به لیست کارهای روزانه",
    color:"primary",
    operation:()=>{
      const oldData=this.addToMainTodoService.mainTodo.getValue()
      this.addToMainTodoService.mainTodo.next([...oldData,this.selectedRow])
      this.router.navigate([''])
    }

  }
  editNameListButton:Button={
    hostClass:"lg",
    text:"ویرایش نام لیست",
    color:"warn",
    operation:()=>{
      const defaulListName=this.listTodosService.listTodos.getValue().find(l=>l.value==this.id)
      this.dialog.open(DialogComponent,{
        width:"800px",
        height:"100px",
        data:{
          id:this.id,
          edit:{value:"accent",label:"ویرایش نام لیست"},
          controls:{
            newList:{value:defaulListName?.label,name:"editList",validators: {required:Validators.required},type:'input',controlType:"input",label:"لیست جدید",style:{width:"800px"}} as ControlConfig
          }
        } as FormConfig
      })
    }
}
  formConfig=formConfig
  displayColumns=['select','date','title','description','completed']
  dataSource:BehaviorSubject<any>=new BehaviorSubject([])
  submitForm(submitForm:SubmitForm){
    this.form=submitForm.form
    const oldData:Todo[]=this.dataSource.getValue()
    const formValue:Todo=submitForm.form.value
    const data:Todo={select:"",completed:formValue.completed,date:formValue.date,title:formValue.title,description:formValue.description,id:formValue.id}
    switch (submitForm.operationType){
      case "add":
        const add={select:"",completed:formValue.completed,date:formValue.date,title:formValue.title,description:formValue.description,id:Math.random()}
        this.dataSource.next([...oldData,add])
        break
      case "edit":
        this.doOperation('edit',oldData,data,this.dataSource)
        break
      case 'delete':
        this.doOperation('delete',oldData,data,this.dataSource)
        break
    }

    submitForm.form.reset()
  }

  doOperation(operationType:string,oldData:Todo[],data:Todo,dataSource:BehaviorSubject<any>){
    const newData:Todo[]=[]
    switch (operationType){
      case 'edit':
        oldData.forEach(t=>{
          t.id===data.id ? newData.push(data): newData.push(t)
        })
        break
      case 'delete':
        oldData.forEach(t=>{
          t.id===data.id ? null : newData.push(t)
        })
    }
    dataSource.next(newData)
  }
  onSelectedRow(element:Todo){
    this.selectedRow=element
    this.form.patchValue({
      title:element.title,
      description:element.description,
      date:element.date,
      completed:element.completed,
      id:element.id
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
