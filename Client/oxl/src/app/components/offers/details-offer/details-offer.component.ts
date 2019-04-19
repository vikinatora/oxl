import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../core/services/offer.service';
import { AuthService } from '../../core/services/auth.service';
import { Offer } from 'src/app/models/Offer';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-offer',
  templateUrl: './details-offer.component.html',
  styleUrls: ['./details-offer.component.css']
})
export class DetailsOfferComponent implements OnInit {
  offer: Offer;
  username: string

  constructor(private offerService: OfferService,
    private authService: AuthService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.username = localStorage.getItem('username');
    this.offerService.getDetails(id).subscribe((offer)=>{
      this.offer = offer;
      console.log(offer);
    })
  }

}
