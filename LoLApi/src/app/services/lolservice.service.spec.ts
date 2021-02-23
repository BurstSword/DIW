import { TestBed } from '@angular/core/testing';

import { LolserviceService } from './lolservice.service';

describe('LolserviceService', () => {
  let service: LolserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
