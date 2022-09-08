import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceCardComponent } from './grievance-card.component';

describe('GrievanceCardComponent', () => {
  let component: GrievanceCardComponent;
  let fixture: ComponentFixture<GrievanceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievanceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrievanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
