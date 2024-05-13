import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTaskListComponent } from './completed-task-list.component';
import {TableModule} from "../_share/_components/table/table.module";
import {ButtonModule} from "../_share/button/button.module";
import {FormGeneratorModule} from "../_share/form-generator/form-generator.module";
import {RouterModule, Routes} from "@angular/router";
import {MainTodosComponent} from "../main-todos/main-todos.component";
import {TitlePageModule} from "../_share/title-page/title-page.module";
const routes:Routes=[
  {path:"",component:CompletedTaskListComponent},
]



@NgModule({
  declarations: [
    CompletedTaskListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    ButtonModule,
    FormGeneratorModule,
    TitlePageModule
  ]
})
export class CompletedTaskListModule { }
