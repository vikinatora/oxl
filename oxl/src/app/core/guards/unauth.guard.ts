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
export class UnauthGuardActivatior implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router,
    private toastr: ToastrService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
      return true;
    }  
    this.router.navigate(['/offer/list']);
    this.toastr.error('You are already logged in','You have nothin to do here')

    return false;
  }
}
