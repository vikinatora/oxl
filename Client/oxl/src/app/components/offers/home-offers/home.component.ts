import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../core/services/offer.service';
import { AuthService } from '../../core/services/auth.service';
import { Offer } from 'src/app/models/Offer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public newestOffers: Offer[]
  public hottestOffers: Offer[]
  private newestCount: number;
  private mostViewedCount: number;

  constructor(private offerService: OfferService,
    private authService: AuthService) { 
      this.newestCount = 6;
      this.mostViewedCount = 6;
    }

  ngOnInit() {
    this.offerService.getNewest(this.newestCount).subscribe((newest)=>{
      this.newestOffers = newest;
    });

    this.offerService.getHottest(this.mostViewedCount).subscribe((hottest)=>{
      this.hottestOffers = hottest;
    });
  }

  loadMoreNewest() {
    this.newestCount += 6;
    this.offerService.getNewest(this.newestCount).subscribe((newest)=>{
      this.newestOffers = newest;
    });
  }

  loadMoreMostViewed() {
    this.mostViewedCount += 6;
    this.offerService.getHottest(this.mostViewedCount).subscribe((hottest)=>{
      this.hottestOffers = hottest;
    });
  }
}
