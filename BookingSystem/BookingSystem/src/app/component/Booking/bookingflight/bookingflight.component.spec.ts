import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingflightComponent } from './bookingflight.component';

describe('BookingflightComponent', () => {
  let component: BookingflightComponent;
  let fixture: ComponentFixture<BookingflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingflightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
