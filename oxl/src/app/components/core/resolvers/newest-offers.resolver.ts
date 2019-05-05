<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OfferService } from '../services/offer.service';

@Injectable()
export class NewestResolver implements Resolve<any> {  
    constructor(private http: HttpClient,
        private offersService: OfferService) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.offersService.getNewest(6);
    }
=======
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OfferService } from '../services/offer.service';

@Injectable()
export class NewestResolver implements Resolve<any> {  
    constructor(private http: HttpClient,
        private offersService: OfferService) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.offersService.getNewest(6);
    }
>>>>>>> d5dd9e9c329df9e9da215784fea469d81621d22d
}