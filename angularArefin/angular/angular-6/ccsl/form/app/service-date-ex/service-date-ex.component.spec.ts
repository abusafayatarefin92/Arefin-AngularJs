import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDateExComponent } from './service-date-ex.component';

describe('ServiceDateExComponent', () => {
  let component: ServiceDateExComponent;
  let fixture: ComponentFixture<ServiceDateExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDateExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDateExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
