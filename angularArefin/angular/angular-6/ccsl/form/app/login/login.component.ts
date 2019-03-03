import { Component, OnInit } from '@angular/core';
//Template Driven Example
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 onClickSubmit(data) {
      alert("Entered Email id : " + data.emailid);
	  console.log(data.emailid);
   }

   display(arg){
	   alert("M: "+arg.m+" N: "+arg.n+" P: "+arg.p);
	   console.log("M: "+arg.m+" N: "+arg.n+" P: "+arg.p);
   }
}
