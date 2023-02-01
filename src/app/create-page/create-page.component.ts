
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent {
  public  loadComponent:any[]=[];
  public loadRadio:any[]=[] ; 
public loadquizz:any[]=[] ; 
public index:number=0  ;
  constructor() { }

  ngOnInit() {
  }

    addfield(){
      this.index ++ ; 
   let  ele=this.index ; 
        this.loadComponent.push(ele);



    }
    addRadio = ()=>{ 
      this.loadRadio.push(1) ; 
    }
  deletefield(index:number)
  {
    this.loadComponent.slice(index,1)
  }
  SaveChoice(select:string)
  {
console.log()
  }
  donequizz ()
  { 
    this.loadquizz.push(1) ; 
  }
}
