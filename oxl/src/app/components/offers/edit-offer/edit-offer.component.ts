import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OfferService } from '../../core/services/offer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/models/Offer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {
  id: string;
  formValue: Offer;
  categories;
  @Input('formInput') formInput;
  
  constructor(private offerService: OfferService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private toastr: ToastrService,) { }

  ngOnInit() {
    this.categories = this.activatedRoute.snapshot.data['categories'];
    this.formValue = this.route.snapshot.data['offer'];
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit(formValue) {
    let creator = localStorage.getItem('username');
    formValue.creator = creator;
    this.offerService.edit(formValue,this.id)
      .subscribe((data)=>{
        this.toastr.success(`${data['message']}`,'Success')
        this.router.navigate(['/offer/list'])
      })
  }
}
