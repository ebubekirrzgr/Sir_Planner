import { TestBed } from '@angular/core/testing';

import { TakimProjeleriService } from './takim-projeleri.service';

describe('TakimProjeleriService', () => {
  let service: TakimProjeleriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakimProjeleriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
