import { TestBed } from '@angular/core/testing';

import { GuessEventService } from './guess-event.service';

describe('GuessEventService', () => {
  let service: GuessEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuessEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
