import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/models/Offer';
<<<<<<< HEAD
import { AuthService } from '../../../core/services/auth.service';
=======
import { AuthService } from '../../core/services/auth.service';
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {
  @Input()
  offers: Offer[]

  username: string;
  
  constructor() { }

  ngOnInit() {
  }

}
