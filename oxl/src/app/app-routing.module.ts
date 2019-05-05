import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
<<<<<<< HEAD
import { AuthGuardLoader } from './core/guards/auth.guard';
import { AuthGuardActivatior } from './core/guards/auth.guard.canActivate';
import { ProfileComponent } from './components/profile/profile.component';
import { UserOfferResolver } from './core/resolvers/user.offers.resolver';
import { UnauthGuardActivatior } from './core/guards/unauth.guard';
=======
import { AuthGuardLoader } from './components/core/guards/auth.guard';
import { AuthGuardActivatior } from './components/core/guards/auth.guard.canActivate';
import { ProfileComponent } from './components/profile/profile.component';
import { UserOfferResolver } from './components/core/resolvers/user.offers.resolver';
import { UnauthGuardActivatior } from './components/core/guards/unauth.guard';
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path:'login',component: LoginComponent, canActivate: [UnauthGuardActivatior] },
  { path:'register', component: RegisterComponent, canActivate: [UnauthGuardActivatior] },
  { path:'profile', component: ProfileComponent, resolve: {offers: UserOfferResolver}, canActivate: [AuthGuardActivatior] },
  { path:'category/create', component: CreateCategoryComponent },
  {
    path:'offer',
    loadChildren:'./components/offers/offer.module#OfferModule',
    canLoad:[AuthGuardLoader],
    canActivate:[AuthGuardActivatior]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
