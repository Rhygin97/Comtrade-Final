import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';


const routes: Routes = [
  {
    path: "authentication",
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: "home",
    children: [
      {
        path: 'navbar',
        component: NavbarComponent,
        pathMatch: 'full'
      },
      {
        path: 'footer',
        component: FooterComponent,
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
