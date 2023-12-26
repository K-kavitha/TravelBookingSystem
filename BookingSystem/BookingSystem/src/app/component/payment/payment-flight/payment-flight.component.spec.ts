import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFlightComponent } from './payment-flight.component';

describe('PaymentFlightComponent', () => {
  let component: PaymentFlightComponent;
  let fixture: ComponentFixture<PaymentFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentFlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
