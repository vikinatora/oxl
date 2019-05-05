import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-offer',
  templateUrl: './search-offer.component.html',
  styleUrls: ['./search-offer.component.css']
})
export class SearchOfferComponent implements OnInit {
  @Input('category') category;
  @Input('query') query;

  categories: Category[]
  constructor(private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.categories = this.route.snapshot.data['categories'];
  }

  submit(formValue) {
    if(!formValue.query) {
      this.toastr.info('Search field cannot be empty');
      return;
    }
    if(!formValue.category) {
      formValue.category ="*";
    }
    
    this.router.navigate(['offer/search'], { queryParams: {
      query: formValue.query,
      category: formValue.category }
    });
    
    

  }

}
