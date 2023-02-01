import { Component } from '@angular/core';
import { CreatePageComponent } from '../create-page/create-page.component';
@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent {
delete = (index?:any)=> { 
  console.log(index)
}
}
