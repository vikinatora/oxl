import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../../../core/services/auth.service';
=======
import { AuthService } from '../../core/services/auth.service';
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  get f() {
    return this.form.controls;
  }

  register(formData) {
    this.authService
      .register(formData)
      .subscribe((data) => {
        this.router.navigate([ '/login' ])
      });
  }

}
