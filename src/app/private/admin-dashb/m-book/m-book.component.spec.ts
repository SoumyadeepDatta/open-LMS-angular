import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBookComponent } from './m-book.component';

describe('MBookComponent', () => {
  let component: MBookComponent;
  let fixture: ComponentFixture<MBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
