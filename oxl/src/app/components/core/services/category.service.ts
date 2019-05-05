import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from 'src/app/models/Offer';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  createUrl = "http://localhost:5000/category/create";
  getAllUrl = "http://localhost:5000/category/all"
  constructor(private http: HttpClient) { }

  create(formValue) {
    return this.http.post<Offer>(this.createUrl,formValue);
  }
  getAll() {
    return this.http.get<Offer[]>(this.getAllUrl);
  }
}
