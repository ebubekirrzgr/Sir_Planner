import { TestBed } from '@angular/core/testing';

import { TakimGorevleriService } from './takim-gorevleri.service';

describe('TakimGorevleriService', () => {
  let service: TakimGorevleriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakimGorevleriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
