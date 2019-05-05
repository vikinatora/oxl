import { Injectable } from '@angular/core';
import { 
   Router,
   CanLoad,
   Route,
   UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoader implements CanLoad {
  constructor(
    private authService : AuthService,
    private router : Router,
    private toastr: ToastrService
  ) { }

  canLoad(route: Route, segments: UrlSegment[]) {
    if (localStorage.getItem('token')) {
      return true;
    }  
    this.router.navigate(['/login']);
    this.toastr.error('Please login before accessing this page','Unauthorized')

    return false;
  }
}
