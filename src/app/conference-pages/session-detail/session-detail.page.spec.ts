import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionDetailPage } from './session-detail.page';

describe('SessionDetailPage', () => {
  let component: SessionDetailPage;
  let fixture: ComponentFixture<SessionDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SessionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
