import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPopoverPage } from './about-popover.page';

describe('AboutPopoverPage', () => {
  let component: AboutPopoverPage;
  let fixture: ComponentFixture<AboutPopoverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
