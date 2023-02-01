import { Component } from '@angular/core';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent {
  signin:boolean=false ; 

  Show = ()=> {
    this.signin=true ;
    console.log("clicked") ; 
    console.log(this.signin)
      }

}
