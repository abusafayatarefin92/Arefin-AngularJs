import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
private  users:  Array<Object> = [];
constructor(private  data:  ApiService) { }
ngOnInit() {
    this.getUsersx();
}
public  getUsersx(){
    this.data.getUsers().subscribe((data:  Array<Object>) => {
        this.users  =  data;
        console.log(data);
    });
}
}
