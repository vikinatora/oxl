import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Offer } from 'src/app/models/Offer';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-form-offer',
  templateUrl: './form-offer.component.html',
  styleUrls: ['./form-offer.component.css']
})
export class FormOfferComponent implements OnInit {
  @Input('formInput') formInput;
  @Input('categories') categories;
  @Output('formValue') formValue = new EventEmitter<Offer>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    console.log(this.categories);
  }

  emitForm(formValue: Offer) {
    this.formValue.emit(formValue)
  }
}
