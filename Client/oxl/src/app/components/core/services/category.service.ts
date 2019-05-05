import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  createUrl = "http://localhost:5000/category/create";
  getAllUrl = "http://localhost:5000/category/all"
  constructor(private http: HttpClient) { }

  create(formValue) {
    return this.http.post(this.createUrl,formValue);
  }
  getAll() {
    return this.http.get(this.getAllUrl);
  }
}
