import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {

constructor(private http: HttpClient) { }

  getUsersDatabyids() {
    return this.http.get('http://sami17.herokuapp.com/users')
  }
}
}
