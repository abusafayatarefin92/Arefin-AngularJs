import { Component, OnInit } from '@angular/core';
import { MyhttpserviceService } from './../myhttpservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-htttexample',
  templateUrl: './htttexample.component.html',
  styleUrls: ['./htttexample.component.scss']
})
export class HtttexampleComponent implements OnInit {

   users$: Object;
  constructor(private data: MyhttpserviceService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data; 
    );
	
  }

}
