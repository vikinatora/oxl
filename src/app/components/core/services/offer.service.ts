import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from 'src/app/models/Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private postCreateUrl = "http://localhost:5000/offer/create"
  private editUrl = "http://localhost:5000/offer/edit"
  private deleteUrl = "http://localhost:5000/offer/delete"
  private purchaseUrl = "http://localhost:5000/offer/purchase"
  private getNewestUrl = "http://localhost:5000/offer/newest"
  private getHottestUrl = "http://localhost:5000/offer/hottest"
  private getDetailsUrl = "http://localhost:5000/offer/details"
  private getUserOffersUrl = "http://localhost:5000/offer/user"
  private searchOffersUrl = "http://localhost:5000/offer/search"


  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post<Offer>(this.postCreateUrl,data)
  }

  edit(data,id) {
    return this.http.put<Offer>(this.editUrl+'/'+id,data);
  }

  markPurchased(id) {
    return this.http.post<Offer>(this.purchaseUrl+'/'+id,{value:true});
  }

  markUnpurchased(id) {
    return this.http.post<Offer>(this.purchaseUrl+'/'+id,{value:false});
  }

  delete(id) {
    return this.http.delete<Offer>(this.deleteUrl+'/'+id);
  }
  
  getNewest(count){
    return this.http.get<Offer[]>(this.getNewestUrl+'/'+count)
  }

  getHottest(count){
    return this.http.get<Offer[]>(this.getHottestUrl+'/'+count)
  }

  getDetails(id) {
    return this.http.get<Offer>(this.getDetailsUrl+'/'+id)
  }
  getUserOffers() {
    return this.http.get<Offer[]>(this.getUserOffersUrl);
  }

  searchOffers(name,category) {
    return this.http.get<Offer[]>(this.searchOffersUrl+'/'+name+'/'+category)
  }
}
