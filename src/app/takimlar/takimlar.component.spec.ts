import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakimlarComponent } from './takimlar.component';

describe('TakimlarComponent', () => {
  let component: TakimlarComponent;
  let fixture: ComponentFixture<TakimlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakimlarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakimlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
