import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOfferComponent } from './car-offer.component';

describe('CarOfferComponent', () => {
  let component: CarOfferComponent;
  let fixture: ComponentFixture<CarOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
