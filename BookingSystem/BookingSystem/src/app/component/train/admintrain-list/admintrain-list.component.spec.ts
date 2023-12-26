import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintrainListComponent } from './admintrain-list.component';

describe('AdmintrainListComponent', () => {
  let component: AdmintrainListComponent;
  let fixture: ComponentFixture<AdmintrainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmintrainListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmintrainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
