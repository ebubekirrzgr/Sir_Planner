import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProjectsAddComponent } from './team-projects-add.component';

describe('TeamProjectsAddComponent', () => {
  let component: TeamProjectsAddComponent;
  let fixture: ComponentFixture<TeamProjectsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamProjectsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProjectsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
