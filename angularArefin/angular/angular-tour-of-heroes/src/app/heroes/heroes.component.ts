import { Component, OnInit } from '@angular/core';
import {hero} from '../hero';
import {student} from '../student';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  heroes=HEROES;
  
hero: Hero{
id:1;
name:"Sami";
};
student:Student{id:1000;
name:"Reza";
email:"springapidev@gmail.com"};



}


