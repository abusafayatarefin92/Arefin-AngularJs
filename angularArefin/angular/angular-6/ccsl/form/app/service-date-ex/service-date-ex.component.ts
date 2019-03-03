import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';
@Component({
  selector: 'app-service-date-ex',
  templateUrl: './service-date-ex.component.html',
  styleUrls: ['./service-date-ex.component.scss']
})
export class ServiceDateExComponent implements OnInit {

 todaydate;
  newcomponent = "Entered in new component created";
  my;
  sum;
   constructor(private myservice: MyserviceService) {}
   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
	  this.my = this.myservice.showMyDetails();
	  this.sum=this.myservice.showSum(5,10);
   }

}
