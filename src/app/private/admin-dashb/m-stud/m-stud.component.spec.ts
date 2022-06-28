import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MStudComponent } from './m-stud.component';

describe('MStudComponent', () => {
  let component: MStudComponent;
  let fixture: ComponentFixture<MStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MStudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
