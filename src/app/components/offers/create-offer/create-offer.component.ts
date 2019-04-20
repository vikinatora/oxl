import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OfferService } from '../../core/services/offer.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  formValue;
  categories:Category[];
  selectedCategory: string;
  constructor(private activatedRoute: ActivatedRoute,
      private offerService: OfferService,
      private router: Router,
      private toastr: ToastrService) {  }

  ngOnInit() {
    this.categories = this.activatedRoute.snapshot['_resolvedData']['categories'];
    this.formValue={
      category: "",
      creator:"",
      description: "",
      image: "",
      name: "",
      price: "" ,
    };
  }

  onSubmit(formValue) {
    let creator = localStorage.getItem('username');
    formValue.creator = creator;
    console.log(formValue);
    this.offerService.create(formValue)
      .subscribe((data)=>{
        this.toastr.success(`Successfullt created offfer ${data.name}`,'Success')
        this.router.navigate(['/offer/list'])
      })
  }

}
