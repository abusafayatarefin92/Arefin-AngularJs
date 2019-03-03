import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
editUserData = {}
  constructor(private data : CrudService) { }

  ngOnInit() {
  }
   editUser(){
	this.data.updateuser(this.editUserData).subscribe(
	data => this.editUserData = data;
	);
	console.log(this.editUserData);
   }
}
