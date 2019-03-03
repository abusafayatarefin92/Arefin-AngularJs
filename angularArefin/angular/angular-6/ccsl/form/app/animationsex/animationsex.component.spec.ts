import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsexComponent } from './animationsex.component';

describe('AnimationsexComponent', () => {
  let component: AnimationsexComponent;
  let fixture: ComponentFixture<AnimationsexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
