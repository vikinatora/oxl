import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OfferService } from '../services/offer.service';

@Injectable()
export class UserOfferResolver implements Resolve<any> {  
    constructor(private http: HttpClient,
        private offersService: OfferService) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.offersService.getUserOffers();
    }
}