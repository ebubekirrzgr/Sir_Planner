import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakimGorevleriComponent } from './takim-gorevleri.component';

describe('TakimGorevleriComponent', () => {
  let component: TakimGorevleriComponent;
  let fixture: ComponentFixture<TakimGorevleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakimGorevleriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakimGorevleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
