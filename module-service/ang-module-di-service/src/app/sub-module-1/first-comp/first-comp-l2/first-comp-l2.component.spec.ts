import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompL2Component } from './first-comp-l2.component';

describe('FirstCompL2Component', () => {
  let component: FirstCompL2Component;
  let fixture: ComponentFixture<FirstCompL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCompL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCompL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
