import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Offer } from 'src/app/models/Offer';

@Component({
  selector: 'app-form-offer',
  templateUrl: './form-offer.component.html',
  styleUrls: ['./form-offer.component.css']
})
export class FormOfferComponent implements OnInit {
  @Input('formInput') formInput;
  @Input('categories') categories;
  @Output('formValue') formValue = new EventEmitter<Offer>();

  constructor() { }

  ngOnInit() {
  }

  emitForm(formValue: Offer) {
    this.formValue.emit(formValue)
  }
}
