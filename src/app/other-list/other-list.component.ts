import { Component } from '@angular/core';
import {formConfig} from "../_share/_values/values";
import {Button, SubmitForm, Todo} from "../_models/models.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrl: './other-list.component.scss'
})
export class OtherListComponent {

  constructor(private router:Router) {
  }
  button:Button={
    text:"بازگشت به لیست اصلی",
    color:"primary",
    iconName:"arrow_forward",
    hasIcon:true,
    operation:()=>{
      this.router.navigate([''])
    }
  }
  formConfig=formConfig

  submitForm(submitForm:SubmitForm){

  }

}
