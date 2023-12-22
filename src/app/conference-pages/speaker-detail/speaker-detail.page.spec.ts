import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeakerDetailPage } from './speaker-detail.page';

describe('SpeakerDetailPage', () => {
  let component: SpeakerDetailPage;
  let fixture: ComponentFixture<SpeakerDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpeakerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
