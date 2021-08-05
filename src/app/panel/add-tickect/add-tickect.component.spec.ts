import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTickectComponent } from './add-tickect.component';

describe('AddTickectComponent', () => {
  let component: AddTickectComponent;
  let fixture: ComponentFixture<AddTickectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTickectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTickectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
