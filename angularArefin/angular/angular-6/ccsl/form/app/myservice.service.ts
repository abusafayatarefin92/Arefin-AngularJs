import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
   showTodayDate() {
      let ndate = new Date();
      return ndate;
   }
   
   showMyDetails(){
	   return "hello I am Reza working in Angular Js";
   }
 
   showSum(x,y){
	  
	   return x+y;
   }
}
