import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTasksAddComponent } from './team-tasks-add.component';

describe('TeamTasksAddComponent', () => {
  let component: TeamTasksAddComponent;
  let fixture: ComponentFixture<TeamTasksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTasksAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTasksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
