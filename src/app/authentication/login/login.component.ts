import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthenticationService } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username;
  password;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
    
  createLoginForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(this.username, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required])
    })
  }
  
  onSubmit() {
    this.authenticationService.loginUser(this.loginForm.value).subscribe(
      (response:any) => {
        this.storageService.saveUser(JSON.stringify(response));
        this.storageService.saveToken(response.authorization.token);
        this.toastr.success('Uspešno ste se ulogovali!');
        this.router.navigate(["/home/main"]);
      },
      error => {
        this.toastr.error(error.message, 'Nešto nije u redu!');
        console.log(error);
      }
      
    )
  }

}
