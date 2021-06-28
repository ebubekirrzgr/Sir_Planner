import { TestBed } from '@angular/core/testing';

import { GorevService } from './gorev.service';

describe('GorevService', () => {
  let service: GorevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GorevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
