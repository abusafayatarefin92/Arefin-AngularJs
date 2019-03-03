import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {


constructor(private http: HttpClient) { }



  getUsers(idx:number) {
      return this.http.get('https://jsonplaceholder.typicode.com/users?id='+idx);
  }
}
