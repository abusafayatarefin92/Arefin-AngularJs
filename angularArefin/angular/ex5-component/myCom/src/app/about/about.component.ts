import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
aboutTitle: string = 'This About Title Page';
aboutDes: string = 'This is about Page Description';
constructor(private route: ActivatedRoute) { 
  this.route.params.subscribe(res => console.log(res.id));
}

  ngOnInit() {
  }

}
