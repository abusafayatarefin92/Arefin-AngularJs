import { TestBed, inject } from '@angular/core/testing';

import { SearchdataService } from './searchdata.service';

describe('SearchdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchdataService]
    });
  });

  it('should be created', inject([SearchdataService], (service: SearchdataService) => {
    expect(service).toBeTruthy();
  }));
});
