import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  
 title = 'Angular 7 Project!'; 

  todaydate = new Date(); 

  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 
  
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", 
      "Sept", "Oct", "Nov", "Dec"]; 
}
