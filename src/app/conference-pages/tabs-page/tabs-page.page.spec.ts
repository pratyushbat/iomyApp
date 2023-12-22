import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsPagePage } from './tabs-page.page';

describe('TabsPagePage', () => {
  let component: TabsPagePage;
  let fixture: ComponentFixture<TabsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
