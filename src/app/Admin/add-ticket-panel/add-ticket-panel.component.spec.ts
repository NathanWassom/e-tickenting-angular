import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketPanelComponent } from './add-ticket-panel.component';

describe('AddTicketPanelComponent', () => {
  let component: AddTicketPanelComponent;
  let fixture: ComponentFixture<AddTicketPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTicketPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
