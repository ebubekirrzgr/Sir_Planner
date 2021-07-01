import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakimProjeleriComponent } from './takim-projeleri.component';

describe('TakimProjeleriComponent', () => {
  let component: TakimProjeleriComponent;
  let fixture: ComponentFixture<TakimProjeleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakimProjeleriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakimProjeleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
