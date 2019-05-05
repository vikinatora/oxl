import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form')
  form;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {

  }

  login(formData) {
    this.authService
      .login(formData)
      .subscribe((data) => {
        console.log(data);
        localStorage.setItem('token', data['token']);
        localStorage.setItem('username',data['user']['username']);
        localStorage.setItem('isAdmin',data['user']['isAdmin'])
        this.router.navigate([ '/offer/list' ])
      });
  }

}
