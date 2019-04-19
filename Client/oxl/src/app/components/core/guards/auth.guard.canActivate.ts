import { Injectable } from '@angular/core';
import { 
   Router,
   CanLoad,
   Route,
   UrlSegment,
   RouterStateSnapshot,
   ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CanActivate } from '@angular/router/';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardActivatior implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router,
    private toastr: ToastrService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      return true;
    }  
    this.router.navigate(['/login']);
    this.toastr.error('Please login before accessing this page','Unauthorized')

    return false;
  }
}
