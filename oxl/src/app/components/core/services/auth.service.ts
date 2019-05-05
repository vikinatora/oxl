<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private readonly loginUrl = 'http://localhost:5000/auth/login';
  private readonly registerUrl = 'http://localhost:5000/auth/register';

  constructor(
    private http : HttpClient
  ) {  }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() {
    return localStorage.getItem('isAdmin') === 'true' ? true : false ;
  }
  
  getToken() {
    return localStorage.getItem('token');
  }
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private readonly loginUrl = 'http://localhost:5000/auth/login';
  private readonly registerUrl = 'http://localhost:5000/auth/register';

  constructor(
    private http : HttpClient
  ) {  }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() {
    return localStorage.getItem('isAdmin') === 'true' ? true : false ;
  }
  
  getToken() {
    return localStorage.getItem('token');
  }
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
}