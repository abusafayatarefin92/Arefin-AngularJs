import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(private data : CrudService) { }
deluser = {}
  ngOnInit() {
	
  }
duser(){
	  this.data.deleteuser(this.deluser.id).subscribe(
	  data => this.deluser = data;
	  );
	  console.log(this.deluser);
}
}
