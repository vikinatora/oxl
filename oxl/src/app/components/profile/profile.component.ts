import { Component, OnInit, ViewChild } from '@angular/core';
import { Offer } from 'src/app/models/Offer';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { OfferService } from '../core/services/offer.service';
import { ToastrService } from 'ngx-toastr';
import { MatTable } from '@angular/material/table';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('table') table: MatTable<any>;
  offers: Offer[]
  displayedColumns = ['name', 'price', 'views', 'category', 'actions'];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private offersService: OfferService,
    private toastr: ToastrService,
    private authService: AuthService) { }

  ngOnInit() {
    this.offers = this.activatedRoute.snapshot['_resolvedData']['offers'];
  }

  details(id) {
    this.router.navigate([`/offer/details/${id}`]);
  }

  edit(id) {
    this.router.navigate([`/offer/edit/${id}`]);
  }

  delete(id) {
    let result = window.confirm('Are you sure you want to delete this offer?');
    if(result) {
      this.offersService.delete(id).subscribe((data)=>{
        if(data['success']) {
          this.toastr.success(data['message'],'Success');
          this.renderRows();
        } else {
          this.toastr.error(data['message'],'Error');
        }
      })
    }
    
  }

  markPurchased(id) {
    this.offersService.markPurchased(id).subscribe((data)=>{
      if(data['success']) {
        this.toastr.success('Successfully marked offer as purchased','Success');
        this.renderRows();
      } else {
        this.toastr.error(data['message'],'Error');
      }
    })
  }

  markUnpurchased(id) {
    this.offersService.markUnpurchased(id).subscribe((data)=>{
      if(data['success']) {
        this.toastr.success('Successfully marked offer as unpurchased','Success');
        this.renderRows();
      } else {
        this.toastr.error(data['message'],'Error');
      }
    })
  }
  renderRows() {
    this.offersService.getUserOffers().subscribe(data=>{
      this.offers = data;
      this.table.renderRows();
    })
  }
}
