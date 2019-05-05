import { CreateOfferComponent } from './create-offer/create-offer.component';
import { DetailsOfferComponent } from './details-offer/details-offer.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home-offers/home.component';
import { NgModule } from '@angular/core';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { CategoriesResolver } from '../../core/resolvers/categories.resolver';
import { OfferDetailsResolver } from '../../core/resolvers/offer.details.resolver';
import { NewestResolver } from '../../core/resolvers/newest-offers.resolver';
import { MostViewedResolver } from '../../core/resolvers/most-viewed-offers.resolver';
import { SearchOfferListComponent } from './search-offer-list/search-offer-list.component';

const offerRoutes: Route[] = [
    { path:'', pathMatch: 'full', redirectTo:'/list'},
    { path:'list', pathMatch: 'full', component: HomeComponent, resolve:{ categories: CategoriesResolver, newest: NewestResolver, mostViewed: MostViewedResolver }},
    { path: 'create', component: CreateOfferComponent, resolve:{ categories: CategoriesResolver } },
    { path: 'edit/:id', component: EditOfferComponent, resolve:{ categories: CategoriesResolver, offer: OfferDetailsResolver } },
    { path: 'details/:id', component: DetailsOfferComponent, resolve:{ offer: OfferDetailsResolver } },
    { path: 'search', component: SearchOfferListComponent, resolve:{ categories: CategoriesResolver } }

] 

@NgModule({
    imports:[
        RouterModule.forChild(offerRoutes)
    ], 
    exports: [
        RouterModule
    ]
})
export class PostRoutingModule {

}