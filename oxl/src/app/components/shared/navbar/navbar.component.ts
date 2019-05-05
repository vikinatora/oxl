import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from '../../../core/services/auth.service';
=======
import { AuthService } from '../../core/services/auth.service';
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate([ '/' ]);
  }
}
