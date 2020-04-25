import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  datasource= ['Apple', 'Orange', 'Banana']; 

ngOnInit(){
 
    let sub= new Subject();
    sub.subscribe({
      next:(val:string)=>{
        this.datasource.push(val)
      },
      error:()=>{},
      complete:()=>{}
    })
    //initial
    sub.next('banana');
    sub.next('orange');
    sub.next('avacado');

    sub.complete();
  }

  addInList(){
      this.datasource.push('fruit_'+Math.floor(Math.random() * 6) + 1  );
    }
}

