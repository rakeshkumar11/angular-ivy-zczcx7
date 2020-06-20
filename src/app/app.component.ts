import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  
 title = 'Angular 7 Project!'; 

 emailid;
 passwd;
 
 fun1(data) 
 {
    this.emailid = data.emailid;
    this. passwd = data.passwd;

    alert("Email id : " + data.emailid + "  password:" + data.passwd); 

  }
}
