import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTrainComponent } from './payment-train.component';

describe('PaymentTrainComponent', () => {
  let component: PaymentTrainComponent;
  let fixture: ComponentFixture<PaymentTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentTrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
