import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../core/services/offer.service';
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
