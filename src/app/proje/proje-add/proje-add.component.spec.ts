import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeAddComponent } from './proje-add.component';

describe('ProjeAddComponent', () => {
  let component: ProjeAddComponent;
  let fixture: ComponentFixture<ProjeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
