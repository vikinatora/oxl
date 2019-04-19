import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/models/Offer';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {
  @Input()
  offers: Offer[]

  username: string;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  deleteOffer(id) {
    
  }

}
