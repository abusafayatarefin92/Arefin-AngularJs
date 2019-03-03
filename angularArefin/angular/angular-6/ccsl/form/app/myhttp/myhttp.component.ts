import { Component, OnInit } from '@angular/core';
import {DataService } from './../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.scss']
})
export class MyhttpComponent implements OnInit {

  constructor(private data : DataService) { }
users$: Object;
  ngOnInit() {
	  this.data.getUsersData().subscribe(
      data => this.users$ = data; 
    );
  }

}
