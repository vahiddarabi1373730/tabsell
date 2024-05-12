import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTodosComponent } from './main-todos.component';
import {RouterModule, Routes} from "@angular/router";
import {GridModule} from "../_share/grid/grid.module";
import {FormGeneratorModule} from "../_share/form-generator/form-generator.module";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {CheckboxComponent} from "../_share/_cellRenderers/checkbox/checkbox.component";
import {CheckboxModule} from "../_share/_cellRenderers/checkbox/checkbox.module";
import {SelectModule} from "../_share/_components/select/select.module";
import {ButtonComponent} from "../_share/button/button.component";
import {ButtonModule} from "../_share/button/button.module";
import {DialogModule} from "../_share/_components/dialog/dialog.module";
const routes:Routes=[
  {path:"",component:MainTodosComponent},
]


@NgModule({
  declarations: [
    MainTodosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GridModule,
    FormGeneratorModule,
    CheckboxModule,
    SelectModule,
    ButtonModule,
    DialogModule

  ],
})
export class MainTodosModule { }
