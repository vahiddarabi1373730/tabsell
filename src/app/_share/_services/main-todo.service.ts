import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Todo} from "../../_models/models.interface";

@Injectable({
  providedIn: 'root'
})
export class MainTodoService {

  constructor() { }
  mainTodo=new BehaviorSubject<Todo[]>([])
}
