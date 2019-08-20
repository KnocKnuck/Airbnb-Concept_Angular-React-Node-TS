import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  compomentTitle = "I'am Compoment title from compoment.ts"
  clickHandler(){
    alert("Don't click too much")
  }
  title = 'app';
}
