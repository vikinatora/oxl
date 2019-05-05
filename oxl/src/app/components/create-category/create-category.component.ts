import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../core/services/category.service';
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
