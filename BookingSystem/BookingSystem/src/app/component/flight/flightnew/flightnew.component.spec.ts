import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightnewComponent } from './flightnew.component';

describe('FlightnewComponent', () => {
  let component: FlightnewComponent;
  let fixture: ComponentFixture<FlightnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightnewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
