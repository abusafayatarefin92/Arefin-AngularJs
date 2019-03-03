import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }
std:Student{
id:500000;
name:"Sejuti";
email:"sejuti@gmail.com";
depname:"Admin";
abc:"ok";
};
  ngOnInit() {
  }

}
