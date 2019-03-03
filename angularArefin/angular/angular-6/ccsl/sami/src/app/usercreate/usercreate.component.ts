import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
createUserData = {}

  constructor(private data : CrudService) { }

  ngOnInit() {
	createUser();
  }
  

createUser(){
	this.data.createuser(this.createUserData).subscribe(
	data=> this.createUserData= data;
	);
	console.log(this.createUserData)
	
}

}
