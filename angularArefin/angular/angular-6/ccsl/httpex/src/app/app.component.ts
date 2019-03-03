import { Component } from '@angular/core';
import {DataService } from './data.service';
import { Observable } from 'rxjs';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   constructor(private data: DataService) { }
   userbyid$: Object;
aa=5;
   searchid=2;
    formdata;
	onClickSubmit(data) {
		this.searchid = data.searchid;
	
	this.data.getUsers(this.searchid).subscribe(
               data => this.userbyid$=data;
      );
	}
   ngOnInit() {
   this.formdata = new FormGroup({
         searchid: new FormControl("2")
      });
	  
this.data.getUsers(this.searchid).subscribe(
               data => this.userbyid$=data;
      );
   }
   





}