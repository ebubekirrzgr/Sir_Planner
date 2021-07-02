import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTeamsAddComponent } from './user-teams-add.component';

describe('UserTeamsAddComponent', () => {
  let component: UserTeamsAddComponent;
  let fixture: ComponentFixture<UserTeamsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTeamsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTeamsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
