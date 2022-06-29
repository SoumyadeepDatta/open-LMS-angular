import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibAllComponent } from './lib-all.component';

describe('LibAllComponent', () => {
  let component: LibAllComponent;
  let fixture: ComponentFixture<LibAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
