import { TestBed } from '@angular/core/testing';
import { ProjeService } from './proje.service';

describe('ProjeService', () => {
  let service: ProjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
