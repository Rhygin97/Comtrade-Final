import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './helpers/token-interceptor/token-interceptor.service';
import { ErrorInterceptorService } from './helpers/error-interceptor/error-interceptor.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './home/main/main.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductComponent } from './home/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
