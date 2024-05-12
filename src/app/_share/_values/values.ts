import {ColDef} from "ag-grid-community";
import {CheckboxComponent} from "../_cellRenderers/checkbox/checkbox.component";
import {FormConfig} from "../../_models/models.interface";
import {Validators} from "@angular/forms";

export const ColumnTodo:ColDef[]=[
  {headerName:"تاریخ",field:"date",checkboxSelection:true},
  {headerName:"عنوان",field:"title"},
  {headerName:"توضیح",field:"description"},
  {headerName:"وضعیت",field:'completed',cellRenderer:CheckboxComponent}
]

export const  formConfig:FormConfig={
  add:{value:"primary",label:"اضافه تسک جدید"},
  edit:{value:"accent",label:"ویرایش تسک جدید"},
  delete:{value:"warn",label:"حذف تسک جدید"},
  controls:{
    date:{value:"",name:"date",validators: {required:Validators.required},type:'input',controlType:"input",label:"تاریخ"},
    description:{value:"",name:"description",validators: {required:Validators.required},type:'input',controlType:"input",label:"توضیح"},
    completed:{value:"",name:"completed",validators: {required:Validators.required},type:'checkbox',controlType:"checkbox",label:"تاریخ"},
    title:{value:"",name:"title",validators: {required:Validators.required},type:'input',controlType:"input",label:"عنوان"},
    id:{value:"",name:"id",validators: {required:Validators.required},type:"",controlType:null,label:""},
  }
}
