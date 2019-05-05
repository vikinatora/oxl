import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
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
