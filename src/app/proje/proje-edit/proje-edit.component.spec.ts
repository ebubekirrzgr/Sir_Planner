import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeEditComponent } from './proje-edit.component';

describe('ProjeEditComponent', () => {
  let component: ProjeEditComponent;
  let fixture: ComponentFixture<ProjeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
