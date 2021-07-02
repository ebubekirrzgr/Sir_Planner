import { TestBed } from '@angular/core/testing';

import { KullaniciTakimlariService } from './kullanici-takimlari.service';

describe('KullaniciTakimlariService', () => {
  let service: KullaniciTakimlariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KullaniciTakimlariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
