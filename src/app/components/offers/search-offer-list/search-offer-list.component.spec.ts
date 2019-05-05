import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOfferListComponent } from './search-offer-list.component';

describe('SearchOfferListComponent', () => {
  let component: SearchOfferListComponent;
  let fixture: ComponentFixture<SearchOfferListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOfferListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
