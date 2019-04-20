import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../core/services/offer.service';
import { AuthService } from '../../core/services/auth.service';
import { Offer } from 'src/app/models/Offer';
import { Category } from 'src/app/models/Category';
import { ActivatedRoute } from '@angular/router';

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
  private categories: Category[];

  constructor(private offerService: OfferService,
    private authService: AuthService,
    private route: ActivatedRoute) { 
      this.newestCount = 6;
      this.mostViewedCount = 6;
    }

  ngOnInit() {
    this.categories = this.route.snapshot.data['categories'];
    this.newestOffers = this.route.snapshot.data['newest'];
    this.hottestOffers = this.route.snapshot.data['mostViewed'];

    // this.offerService.getNewest(this.newestCount).subscribe((newest)=>{
    //   this.newestOffers = newest;
    // });

    // this.offerService.getHottest(this.mostViewedCount).subscribe((hottest)=>{
    //   this.hottestOffers = hottest;
    // });
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
