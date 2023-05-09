import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParticipantsComponent } from './table-participants.component';

describe('TableParticipantsComponent', () => {
  let component: TableParticipantsComponent;
  let fixture: ComponentFixture<TableParticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableParticipantsComponent]
    });
    fixture = TestBed.createComponent(TableParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
