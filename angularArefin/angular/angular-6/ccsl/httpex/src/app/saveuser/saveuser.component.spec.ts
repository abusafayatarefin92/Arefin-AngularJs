import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveuserComponent } from './saveuser.component';

describe('SaveuserComponent', () => {
  let component: SaveuserComponent;
  let fixture: ComponentFixture<SaveuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
