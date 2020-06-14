import { Component, OnInit } from '@angular/core';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faPhone = faPhone;
  faLock = faLock;
  faIdCard = faIdCard;
  faSearch = faSearch;
  faBars = faBars;

  menuShowed = false;

  constructor() { }

  ngOnInit(): void {
  }

  public tapMenu() {
    this.menuShowed = !this.menuShowed;
  }

  public closeMenu() {
    this.menuShowed = false;
  }

}
