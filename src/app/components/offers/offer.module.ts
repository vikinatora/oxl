import { NgModule } from '@angular/core';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { DetailsOfferComponent } from './details-offer/details-offer.component';
import { HomeComponent } from './home-offers/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostRoutingModule } from './offer-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from '../core/services/auth.service';
import { CategoryService } from '../core/services/category.service';
import { JwtInterceptorService } from '../core/services/jwt-interceptor.service';
import { ResponseHandlerService } from '../core/services/response-handler.service';
import { FormOfferComponent } from './form-offer/form-offer.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { OfferDetailsResolver } from '../core/resolvers/offer.details.resolver';
import { SearchOfferComponent } from './search-offer/search-offer.component';
import { NewestResolver } from '../core/resolvers/newest-offers.resolver';
import { MostViewedResolver } from '../core/resolvers/most-viewed-offers.resolver';
import { SearchOfferListComponent } from './search-offer-list/search-offer-list.component';

@NgModule({
    declarations:[
        ListOfferComponent,
        CreateOfferComponent,
        DetailsOfferComponent,
        HomeComponent,
        FormOfferComponent,
        EditOfferComponent,
        SearchOfferComponent,
        SearchOfferListComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        PostRoutingModule,
        HttpClientModule,
        ToastrModule,
    ]
    ,providers:[
        AuthService,
        CategoryService,
        OfferDetailsResolver,
        NewestResolver,
        MostViewedResolver,
        { provide: HTTP_INTERCEPTORS, useClass:JwtInterceptorService, multi:true },
        { provide: HTTP_INTERCEPTORS, useClass:ResponseHandlerService, multi:true }
    ],
})
export class OfferModule {

}