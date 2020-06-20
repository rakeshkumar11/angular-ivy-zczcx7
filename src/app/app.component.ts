import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  
 title = 'Angular 7 Project!'; 

  fun1(data) 
  {
      alert("Email id : " + data.emailid + "  password:" + data.passwd); 

   }
}
