import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnewComponent } from './carnew.component';

describe('CarnewComponent', () => {
  let component: CarnewComponent;
  let fixture: ComponentFixture<CarnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarnewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
