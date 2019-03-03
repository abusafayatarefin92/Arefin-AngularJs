import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

userlist = {}
  constructor(private data : CrudService, private router : Router) { }

  ngOnInit() {
	  this.data.displayusers().subscribe(
	  data => this.userlist = data;
	  );
  }
  userlist(){
	  this.data.displayusers().subscribe(
	  data => this.userlist = data;
	  );
  }
  
}
