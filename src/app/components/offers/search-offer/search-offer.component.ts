import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories = this.route.snapshot.data['categories'];
  }

  submit(formValue) {
    this.router.navigate(['offer/search'], { queryParams: {
      query: formValue.query,
      category: formValue.category }
    });

  }

}
