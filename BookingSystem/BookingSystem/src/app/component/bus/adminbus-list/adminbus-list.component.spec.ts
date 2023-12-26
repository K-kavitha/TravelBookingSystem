import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbusListComponent } from './adminbus-list.component';

describe('AdminbusListComponent', () => {
  let component: AdminbusListComponent;
  let fixture: ComponentFixture<AdminbusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminbusListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminbusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
