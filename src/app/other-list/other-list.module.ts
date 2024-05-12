import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OtherListComponent} from './other-list.component';
import {RouterModule, Routes} from "@angular/router";
import {ButtonModule} from "../_share/button/button.module";
import {FormGeneratorModule} from "../_share/form-generator/form-generator.module";
import {SelectModule} from "../_share/_components/select/select.module";

const routes:Routes=[
  {path:"",component:OtherListComponent},
]


@NgModule({
  declarations: [
    OtherListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    FormGeneratorModule,
    SelectModule,
  ],
  exports: [
    OtherListComponent
  ]
})
export class OtherListModule { }
