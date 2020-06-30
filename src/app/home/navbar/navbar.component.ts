import { Component, OnInit } from '@angular/core';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  faWindowClose = faWindowClose;

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.storageService.clearStorage();
    this.router.navigate(["/authentication/login"]);
  }

  username() {
    this.storageService.getUser();
  }

}
