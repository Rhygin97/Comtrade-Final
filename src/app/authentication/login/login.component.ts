import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email;
  password;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
    
  createLoginForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required])
    })
  }
  
  onSubmit() {
    this.authenticationService.loginUser(this.loginForm.value).subscribe(
      (response:any) => {
        this.storageService.saveUser(JSON.stringify(response));
        this.storageService.saveToken(response.authorization.token);
        this.router.navigate(["/"]);
      },
      error => {
        console.log(error);
      }
      
    )
  }

}
