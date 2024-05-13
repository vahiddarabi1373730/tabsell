import {FormControl, FormGroup} from "@angular/forms";

export interface Todo {
  id?: number;
  title?: string;
  completed?: boolean;
  date?: Date;
  description?: string;
  select?:''

}

export interface FormConfig{
  add?:ValueLabel,
  edit?:ValueLabel,
  delete?:ValueLabel,
  controls:{[key:string]:ControlConfig}

}

export interface ControlConfig{
  name:string,
  label:string,
  controlType:"input" | 'checkbox' | null
  type:"input" | 'checkbox' | '' ,
  value:any,
  validators?:{[key:string]:unknown}
  style?:{
    width:string
  }
}
export interface Button{
  operation:()=>void,
  text:string,
  color:Color,
  hasIcon?:boolean,
  iconName?:string,
  hostClass?:"lg" | 'md'
}

export interface SubmitForm{
  operationType:string,
  form:FormGroup
}

export interface ValueLabel{
  value:any,
  label:string
}

export interface ConfigSelect{
  options:ValueLabel[]
}

type Color="primary" | 'accent' | 'warn'
