import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompletedTodoService {

  constructor() { }

  public completedTodo=new BehaviorSubject<any[]>([])
}
