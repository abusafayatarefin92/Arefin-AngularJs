import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.scss']
})
export class Login3Component implements OnInit {

  constructor() { }
gender;
quiz;
  ngOnInit() {
	  this.quiz=new FormGroup({
		  gender:new FormControl()
	  });
  }
hi(data){
	this.gender=data.gender;
	alert("Click at "+data.gender)
}
}
