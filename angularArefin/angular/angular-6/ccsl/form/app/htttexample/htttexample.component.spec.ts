import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtttexampleComponent } from './htttexample.component';

describe('HtttexampleComponent', () => {
  let component: HtttexampleComponent;
  let fixture: ComponentFixture<HtttexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtttexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtttexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
