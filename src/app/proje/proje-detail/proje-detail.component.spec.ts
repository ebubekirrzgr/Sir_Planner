import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeDetailComponent } from './proje-detail.component';

describe('ProjeDetailComponent', () => {
  let component: ProjeDetailComponent;
  let fixture: ComponentFixture<ProjeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
