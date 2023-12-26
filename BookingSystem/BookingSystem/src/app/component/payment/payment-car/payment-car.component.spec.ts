import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCarComponent } from './payment-car.component';

describe('PaymentCarComponent', () => {
  let component: PaymentCarComponent;
  let fixture: ComponentFixture<PaymentCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
