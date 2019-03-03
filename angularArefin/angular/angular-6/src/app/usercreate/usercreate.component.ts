import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
createUserData = {}
  constructor() { }

  ngOnInit() {
  }
createUser(){
	console.log(this.createUserData)
	
}
}
