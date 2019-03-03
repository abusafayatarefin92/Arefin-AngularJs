import { Component, OnInit } from '@angular/core';
import {SearchdataService } from './../searchdata.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-searchhttp',
  templateUrl: './searchhttp.component.html',
  styleUrls: ['./searchhttp.component.scss']
})
export class SearchhttpComponent implements OnInit {

  constructor(private data : SearchdataService) { }
userbyid$: Object;

  ngOnInit() {
	  this.data.getUsersDatabyids().subscribe(
	  data => this.userbyid$ = data;
	  );
  }

}
