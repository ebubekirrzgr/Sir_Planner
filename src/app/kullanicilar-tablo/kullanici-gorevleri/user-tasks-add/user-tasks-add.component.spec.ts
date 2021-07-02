import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTasksAddComponent } from './user-tasks-add.component';

describe('UserTasksAddComponent', () => {
  let component: UserTasksAddComponent;
  let fixture: ComponentFixture<UserTasksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTasksAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTasksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
