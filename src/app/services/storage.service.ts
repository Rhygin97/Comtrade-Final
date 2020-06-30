import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


saveToken(token) {
  localStorage.setItem('token', token);
}

getToken() {
  return localStorage.getItem('token');
}

clearStorage() {
  localStorage.clear();
}

saveUser(user) {
  localStorage.setItem('user', user);
} 

getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

addMoney(price) {
  localStorage.setItem('price', price);
}

getMoney() {
  return localStorage.getItem('price');
}

setMoney() {

}

}