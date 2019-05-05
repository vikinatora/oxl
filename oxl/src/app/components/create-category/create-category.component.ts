import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD
import { CategoryService } from '../../core/services/category.service';
=======
import { CategoryService } from '../core/services/category.service';
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  
  constructor(
    private categoryService: CategoryService,
    private router: Router) { 
  }

  @ViewChild('form')
  form: NgForm

  ngOnInit() {
  }

  createCategory(formValue){
    this.categoryService.create(formValue)
      .subscribe((data)=> {
        if(data['success']) {
          this.router.navigate(['/']);
        }
      })
  }

}
