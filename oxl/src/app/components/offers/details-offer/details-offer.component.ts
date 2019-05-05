import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { OfferService } from '../../../core/services/offer.service';
import { AuthService } from '../../../core/services/auth.service';
=======
import { OfferService } from '../../core/services/offer.service';
import { AuthService } from '../../core/services/auth.service';
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
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
    this.username = localStorage.getItem('username');
    this.offer = this.route.snapshot.data['offer'];
    console.log(this.offer.creator['phoneNumber']);
  }

}
