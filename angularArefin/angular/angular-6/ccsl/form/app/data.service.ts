import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }

  getUsersData() {
    return this.http.get('http://sami17.herokuapp.com/users')
  }
}
}
