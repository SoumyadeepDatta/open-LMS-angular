import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibIssuedComponent } from './lib-issued.component';

describe('LibIssuedComponent', () => {
  let component: LibIssuedComponent;
  let fixture: ComponentFixture<LibIssuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibIssuedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
