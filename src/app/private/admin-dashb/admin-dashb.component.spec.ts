import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashbComponent } from './admin-dashb.component';

describe('AdminDashbComponent', () => {
  let component: AdminDashbComponent;
  let fixture: ComponentFixture<AdminDashbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
