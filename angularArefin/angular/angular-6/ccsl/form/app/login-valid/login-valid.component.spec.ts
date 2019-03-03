import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginValidComponent } from './login-valid.component';

describe('LoginValidComponent', () => {
  let component: LoginValidComponent;
  let fixture: ComponentFixture<LoginValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
