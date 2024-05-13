import { Component } from '@angular/core';
import {Button, SubmitForm, Todo} from "../_models/models.interface";
import {BehaviorSubject} from "rxjs";
import {FormGroup} from "@angular/forms";
import {formConfig} from "../_share/_values/values";
import {CompletedTodoService} from "../_share/_services/completed-todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-completed-task-list',
  templateUrl: './completed-task-list.component.html',
  styleUrl: './completed-task-list.component.scss'
})
export class CompletedTaskListComponent {
  constructor(private completedTodoService:CompletedTodoService, private router:Router) {
  }
  displayColumns=['select','date','title','description','completed']
  dataSource:BehaviorSubject<any>=this.completedTodoService.completedTodo
  private selectedRowId!:number;
  form!:FormGroup;
  selectedRow(element:Todo){
    this.selectedRowId=element.id as number

  }
  back:Button={
    text:"بازگشت",
    color:"primary",
    iconName:"arrow_forward",
    hasIcon:true,
    operation:()=>{
      this.router.navigate([''])
    }
  }
  button:Button={
    text:"حذف",
    color:"warn",
    iconName:"delete",
    hasIcon:true,
    operation:()=>{
      const completedTodo:Todo[]=this.dataSource.getValue()
      const index=completedTodo.findIndex(t=>t.id===this.selectedRowId)
      const newCompleted:Todo[]=[]
      completedTodo.forEach(t=>{
        if(t.id===this.selectedRowId) return
        else{
          newCompleted.push(t)
        }})
      this.dataSource.next(newCompleted)

    }
  }
}
