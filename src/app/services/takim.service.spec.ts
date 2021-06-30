import { TestBed } from '@angular/core/testing';

import { TakimService } from './takim.service';

describe('TakimService', () => {
  let service: TakimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
