import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciTakimlariComponent } from './kullanici-takimlari.component';

describe('KullaniciTakimlariComponent', () => {
  let component: KullaniciTakimlariComponent;
  let fixture: ComponentFixture<KullaniciTakimlariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciTakimlariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciTakimlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
