import { TestBed } from '@angular/core/testing';

import { KullaniciGorevleriService } from './kullanici-gorevleri.service';

describe('KullaniciGorevleriService', () => {
  let service: KullaniciGorevleriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KullaniciGorevleriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
