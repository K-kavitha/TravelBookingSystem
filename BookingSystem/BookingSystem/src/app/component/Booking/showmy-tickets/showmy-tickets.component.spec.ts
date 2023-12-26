import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmyTicketsComponent } from './showmy-tickets.component';

describe('ShowmyTicketsComponent', () => {
  let component: ShowmyTicketsComponent;
  let fixture: ComponentFixture<ShowmyTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowmyTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowmyTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
