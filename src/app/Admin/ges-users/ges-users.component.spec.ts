import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesUsersComponent } from './ges-users.component';

describe('GesUsersComponent', () => {
  let component: GesUsersComponent;
  let fixture: ComponentFixture<GesUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
