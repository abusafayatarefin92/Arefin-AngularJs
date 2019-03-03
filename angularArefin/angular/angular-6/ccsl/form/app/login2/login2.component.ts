import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {
	emailid;
    formdata;
	m;
	n;
	p;
	reza;

  constructor() { }

  ngOnInit() {
	  this.formdata = new FormGroup({
         emailid: new FormControl("angular@gmail.com"),
         passwd: new FormControl("abcd1234")
      });
	  this.reza=new FormGroup({
		  m:new FormControl("m"),
		   n:new FormControl("n"),
		    p:new FormControl("p")
	  });
  }
onClickSubmit(data) {this.emailid = data.emailid;}
hi(arg){
	this.m=arg.m;
	this.n=arg.n;
	this.p=arg.p;
}
}
