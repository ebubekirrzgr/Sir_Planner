import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevlerComponent } from './gorevler.component';

describe('GorevlerComponent', () => {
  let component: GorevlerComponent;
  let fixture: ComponentFixture<GorevlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GorevlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GorevlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
