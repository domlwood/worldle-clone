import { TestBed } from '@angular/core/testing';

import { GetDistanceService } from './get-distance.service';

describe('GetDistanceService', () => {
  let service: GetDistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
