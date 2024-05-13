import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss'
})
export class TitlePageComponent {
  @Input() title!:string
}
