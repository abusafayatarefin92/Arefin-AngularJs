import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 constructor(private  http:  HttpClient) {}
 API_URL  =  'http://sami17.herokuapp.com';

getUsers(){
    return  this.http.get('http://sami17.herokuapp.com/users');
}

createUser(user){
    return  this.http.post('http://sami17.herokuapp.com/users',user);
}

}
