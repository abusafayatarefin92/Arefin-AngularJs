import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://sami17.herokuapp.com/users/';
  constructor(private http: HttpClient) { }
  displayusers(){
	  return this.http.get('http://sami17.herokuapp.com/users');
  }
  createuser(user){
	  return this.http.post('http://sami17.herokuapp.com/users',user);
  }
updateuser(user){
	  return this.http.put('http://sami17.herokuapp.com/users',user);
  }
  deleteuser(id: number){
	 return this.http.delete(this.apiUrl + '/' + id)
  }
}
