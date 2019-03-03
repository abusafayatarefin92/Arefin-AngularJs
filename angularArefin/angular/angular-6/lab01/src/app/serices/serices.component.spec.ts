import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SericesComponent } from './serices.component';

describe('SericesComponent', () => {
  let component: SericesComponent;
  let fixture: ComponentFixture<SericesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SericesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SericesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
