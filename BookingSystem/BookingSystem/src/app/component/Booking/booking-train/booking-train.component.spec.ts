import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTrainComponent } from './booking-train.component';

describe('BookingTrainComponent', () => {
  let component: BookingTrainComponent;
  let fixture: ComponentFixture<BookingTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingTrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
