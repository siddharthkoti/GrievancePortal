import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceDetailComponent } from './grievance-detail.component';

describe('GrievanceDetailComponent', () => {
  let component: GrievanceDetailComponent;
  let fixture: ComponentFixture<GrievanceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievanceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrievanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
