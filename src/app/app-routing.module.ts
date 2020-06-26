import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { MainComponent } from './home/main/main.component';
import { NewsComponent } from './home/news/news.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductComponent } from './home/product/product.component';


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
      },
      {
        path: 'main',
        component: MainComponent,
        pathMatch: 'full'
      },
      {
        path: 'news',
        component: NewsComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsComponent,
        pathMatch: 'full'
      },
      {
        path: 'product/:id',
        component: ProductComponent,
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
