import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from '../../../core/services/auth.service';
=======
import { AuthService } from '../../core/services/auth.service';
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d

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
