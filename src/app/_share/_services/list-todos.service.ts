import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {ConfigSelect, ValueLabel} from "../../_models/models.interface";

@Injectable({
  providedIn: 'root'
})
export class ListTodosService {

  constructor() { }
  listTodos=new BehaviorSubject<ValueLabel[]>([{value:"mainList",label:"لیست اصلی"},{label:"کارهای انجام شده",value:"completed-task"}])
}
