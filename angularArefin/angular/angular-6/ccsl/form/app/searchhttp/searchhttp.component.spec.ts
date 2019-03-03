import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchhttpComponent } from './searchhttp.component';

describe('SearchhttpComponent', () => {
  let component: SearchhttpComponent;
  let fixture: ComponentFixture<SearchhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
