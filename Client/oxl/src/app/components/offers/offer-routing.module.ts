import { CreateOfferComponent } from './create-offer/create-offer.component';
import { DetailsOfferComponent } from './details-offer/details-offer.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home-offers/home.component';
import { NgModule } from '@angular/core';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { CategoriesResolver } from '../core/resolvers/categories.resolver';

const offerRoutes: Route[] = [
    { path:'', pathMatch: 'full', redirectTo:'/list'},
    { path:'list', pathMatch: 'full', component: HomeComponent},
    // { path: 'user', component: PostListComponent},
    { path: 'create', component: CreateOfferComponent, resolve:{ categories: CategoriesResolver } },
    { path: 'edit/:id', component: EditOfferComponent, resolve:{ categories: CategoriesResolver } },
    { path: 'details/:id', component: DetailsOfferComponent }
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