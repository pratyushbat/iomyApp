import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleFilterPage } from './schedule-filter.page';

describe('ScheduleFilterPage', () => {
  let component: ScheduleFilterPage;
  let fixture: ComponentFixture<ScheduleFilterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScheduleFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
