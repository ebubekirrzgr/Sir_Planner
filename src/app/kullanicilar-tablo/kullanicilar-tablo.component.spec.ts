import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullanicilarTabloComponent } from './kullanicilar-tablo.component';

describe('KullanicilarTabloComponent', () => {
  let component: KullanicilarTabloComponent;
  let fixture: ComponentFixture<KullanicilarTabloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullanicilarTabloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullanicilarTabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
