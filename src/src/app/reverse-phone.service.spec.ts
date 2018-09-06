import { TestBed, inject } from '@angular/core/testing';

import { ReversePhoneService } from './reverse-phone.service';

describe('ReversePhoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReversePhoneService]
    });
  });

  it('should be created', inject([ReversePhoneService], (service: ReversePhoneService) => {
    expect(service).toBeTruthy();
  }));
});
