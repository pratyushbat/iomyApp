import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPagePage } from './tabs-page.page';
import { SchedulePage } from '../schedule/schedule.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPagePage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () =>
              import('../session-detail/session-detail.module').then(
                (m) => m.SessionDetailPageModule
              ),
          },
        ],
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../speaker-list/speaker-list.module').then(
                (m) => m.SpeakerListPageModule
              ),
          },
          {
            path: 'session/:sessionId',
            loadChildren: () =>
              import('../session-detail/session-detail.module').then(
                (m) => m.SessionDetailPageModule
              ),
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () =>
              import('../speaker-detail/speaker-detail.module').then(
                (m) => m.SpeakerDetailPageModule
              ),
          },
        ],
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../map/map.module').then((m) => m.MapPageModule),
          },
        ],
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about/about.module').then((m) => m.AboutPageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagePageRoutingModule {}
