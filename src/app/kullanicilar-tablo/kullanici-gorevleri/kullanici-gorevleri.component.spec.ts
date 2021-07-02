import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciGorevleriComponent } from './kullanici-gorevleri.component';

describe('KullaniciGorevleriComponent', () => {
  let component: KullaniciGorevleriComponent;
  let fixture: ComponentFixture<KullaniciGorevleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciGorevleriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciGorevleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
