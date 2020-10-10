import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dwv0Component } from './dwv0.component';

describe('Dwv0Component', () => {
  let component: Dwv0Component;
  let fixture: ComponentFixture<Dwv0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dwv0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dwv0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
