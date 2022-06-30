import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLibComponent } from './m-lib.component';

describe('MLibComponent', () => {
  let component: MLibComponent;
  let fixture: ComponentFixture<MLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
