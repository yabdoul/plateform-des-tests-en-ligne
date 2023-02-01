import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-radiochoice',
  templateUrl: './radiochoice.component.html',
  styleUrls: ['./radiochoice.component.css']
})
export class RadiochoiceComponent {
  @Input() 
count:any= 0 ; 

}
