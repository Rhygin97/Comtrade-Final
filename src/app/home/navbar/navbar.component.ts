import { Component, OnInit } from '@angular/core';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  money = 0;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.storageService.clearStorage();
    this.toastr.success('Uspešno ste se odjavili!');
    this.router.navigate(["/authentication/login"]);
  }

  getToken() {
    return this.storageService.getToken();
  }

  getUser() {
    return this.storageService.getUser().username;
  }

  addMoney() {
    return this.storageService.addMoney(this.money);
  }

  setValue() {
    this.addMoney();
  }

}
