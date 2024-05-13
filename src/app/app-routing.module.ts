import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  {path:"",loadChildren:()=>import("./main-todos/main-todos.module").then(m=>m.MainTodosModule)},
  {path:"other-list/:id",loadChildren:()=>import ("./other-list/other-list.module").then(m=>m.OtherListModule)},
  {path:"completed-task",loadChildren:()=>import ("./completed-task-list/completed-task-list.module").then(m=>m.CompletedTaskListModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
