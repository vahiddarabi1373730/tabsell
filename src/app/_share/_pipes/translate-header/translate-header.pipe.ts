import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateHeader'
})
export class TranslateHeaderPipe implements PipeTransform {

  transform(value: string):string {
    let result=""
    switch (value){
      case "date" :
        result ='تاریخ'
        break

      case "title" :
        result ='عنوان'
        break

      case "description" :
        result ='توضیح'
        break
      case 'completed':
        result ='انجام شده'
    }
    return result
  }

}
