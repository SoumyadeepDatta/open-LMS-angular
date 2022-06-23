import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudDashbComponent } from './stud-dashb.component';

describe('StudDashbComponent', () => {
  let component: StudDashbComponent;
  let fixture: ComponentFixture<StudDashbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudDashbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudDashbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
