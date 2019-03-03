import { TestBed, inject } from '@angular/core/testing';

import { MyhttpserviceService } from './myhttpservice.service';

describe('MyhttpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyhttpserviceService]
    });
  });

  it('should be created', inject([MyhttpserviceService], (service: MyhttpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
