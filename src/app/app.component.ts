import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app works!';
  users: any[] = [];

  constructor(){
    for(let i=0; i<5000; i++){
      let num = i + 1;
      this.users.push({
        name: 'user ' + num,
        prop1: num,
        prop2: num,
        prop3: num,
        prop4: num,
        prop5: num
      })
    }
  } 

  changeTitle() { 
    this.title = 'App title updated' ;
  }
}
