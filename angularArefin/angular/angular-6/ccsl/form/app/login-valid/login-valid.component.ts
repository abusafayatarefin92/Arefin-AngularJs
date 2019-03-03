import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-valid',
  templateUrl: './login-valid.component.html',
  styleUrls: ['./login-valid.component.scss']
})
export class LoginValidComponent implements OnInit {

  constructor() { }
formValiddata;
emailid;
  ngOnInit() {
	  this.formValiddata=new FormGroup(
	  {
		  emailid:new FormControl("",Validators.compose([
		  Validators.required,
		  Validators.pattern("[^ @]*@[^ @]*")
		  ])),
		  passwd:new FormControl("")
	  }
	  );
  }
	onsubmitValidForm(data){
	this.emailid=data.emailid;
	}
}
