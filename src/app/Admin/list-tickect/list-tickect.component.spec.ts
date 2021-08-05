import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTickectComponent } from './list-tickect.component';

describe('ListTickectComponent', () => {
  let component: ListTickectComponent;
  let fixture: ComponentFixture<ListTickectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTickectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTickectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
