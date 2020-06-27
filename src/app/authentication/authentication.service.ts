import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'http://87.250.59.231:3000';
  registerUrl = this.baseUrl + '/users';
  loginUrl = this.baseUrl + '/users/authenticate';

  constructor(private http: HttpClient) { }
  
  registerUser(data) {
    return this.http.post(this.registerUrl, data);
  }

  loginUser(data) {
    return this.http.post(this.loginUrl, data);
  }
  
  logoutUser() {

  }

  isLoggedIn() {

  }
}
