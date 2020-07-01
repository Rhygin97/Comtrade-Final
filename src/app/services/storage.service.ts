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

addMoney(money) {
  let currentMoney = localStorage.getItem('money');
  if(!currentMoney) {
    currentMoney = "0";
  }
  currentMoney = (parseInt(currentMoney) + parseInt(money)).toString();
  localStorage.setItem('money', currentMoney);
}

getMoney() {
  return localStorage.getItem('money');
}

setMoney(money) {
  localStorage.setItem('money', money);
}

removeMoney(money) {
  let currentMoney = localStorage.getItem('money');
  if(!currentMoney) {
    currentMoney = "0";
  }
  if(parseInt(currentMoney) >= money) {
    currentMoney = (parseInt(currentMoney) - money).toString();
  }
  localStorage.setItem('money', currentMoney);
}

}