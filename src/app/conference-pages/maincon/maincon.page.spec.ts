import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainconPage } from './maincon.page';

describe('MainconPage', () => {
  let component: MainconPage;
  let fixture: ComponentFixture<MainconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
