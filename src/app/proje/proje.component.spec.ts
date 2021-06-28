import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeComponent } from './proje.component';

describe('ProjeComponent', () => {
  let component: ProjeComponent;
  let fixture: ComponentFixture<ProjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
