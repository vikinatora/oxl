import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { OfferService } from '../../../core/services/offer.service';
=======
import { OfferService } from '../../core/services/offer.service';
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
import { Offer } from 'src/app/models/Offer';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-offer-list',
  templateUrl: './search-offer-list.component.html',
  styleUrls: ['./search-offer-list.component.css']
})
export class SearchOfferListComponent implements OnInit {
  offers:Offer[];
  query;
  category;

  constructor(private offersService: OfferService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data=>{
      this.query=data['query'];
      this.category=data['category'];

      this.offersService.searchOffers(this.query,this.category).subscribe(data=>{
        this.offers = data;
      })
    })
  }

}
