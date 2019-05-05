import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
<<<<<<< HEAD
import { JwtInterceptorService } from './core/services/jwt-interceptor.service';
import { ResponseHandlerService } from './core/services/response-handler.service';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CategoryService } from './core/services/category.service';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CategoriesResolver } from './core/resolvers/categories.resolver';
import { ProfileComponent } from './components/profile/profile.component';
import { UserOfferResolver } from './core/resolvers/user.offers.resolver';
import { UnauthGuardActivatior } from './core/guards/unauth.guard';
=======
import { JwtInterceptorService } from './components/core/services/jwt-interceptor.service';
import { ResponseHandlerService } from './components/core/services/response-handler.service';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CategoryService } from './components/core/services/category.service';
import { CommonModule } from '@angular/common';
import { AuthService } from './components/core/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CategoriesResolver } from './components/core/resolvers/categories.resolver';
import { ProfileComponent } from './components/profile/profile.component';
import { UserOfferResolver } from './components/core/resolvers/user.offers.resolver';
import { UnauthGuardActivatior } from './components/core/guards/unauth.guard';
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CreateCategoryComponent,
    LandingPageComponent,
    ProfileComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    MatTableModule
  ],
  providers: [
    AuthService,
    CategoryService,
    CategoriesResolver,
    UserOfferResolver,
    UnauthGuardActivatior,
    { provide: HTTP_INTERCEPTORS, useClass:JwtInterceptorService, multi:true },
    { provide: HTTP_INTERCEPTORS, useClass:ResponseHandlerService, multi:true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
