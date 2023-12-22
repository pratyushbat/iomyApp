import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test.module').then((m) => m.TestPageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./angulario-pages/contact/contact.module').then(
        (m) => m.ContactPageModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./angulario-pages/events/events.module').then(
        (m) => m.EventsPageModule
      ),
  },
  {
    path: 'event-detail',
    loadChildren: () =>
      import('./angulario-pages/events/event-detail/event-detail.module').then(
        (m) => m.EventDetailPageModule
      ),
  },
  {
    path: 'event-detail/:id',
    loadChildren: () =>
      import('./angulario-pages/events/event-detail/event-detail.module').then(
        (m) => m.EventDetailPageModule
      ),
  },
  {
    path: 'maincon',
    loadChildren: () =>
      import('./conference-pages/maincon/maincon.module').then(
        (m) => m.MainconPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./conference-pages/about/about.module').then(
        (m) => m.AboutPageModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./conference-pages/account/account.module').then(
        (m) => m.AccountPageModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./conference-pages/map/map.module').then((m) => m.MapPageModule),
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./conference-pages/schedule/schedule.module').then(
        (m) => m.SchedulePageModule
      ),
  },
  {
    path: 'speaker-list',
    loadChildren: () =>
      import('./conference-pages/speaker-list/speaker-list.module').then(
        (m) => m.SpeakerListPageModule
      ),
  },
  {
    path: 'speaker-detail',
    loadChildren: () =>
      import('./conference-pages/speaker-detail/speaker-detail.module').then(
        (m) => m.SpeakerDetailPageModule
      ),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./conference-pages/support/support.module').then(
        (m) => m.SupportPageModule
      ),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./conference-pages/tabs-page/tabs-page.module').then(
        (m) => m.TabsPagePageModule
      ),
  },
  {
    path: 'tutorial',
    loadChildren: () =>
      import('./conference-pages/tutorial/tutorial.module').then(
        (m) => m.TutorialPageModule
      ),
  },
  // {
  //   path: 'about-popover',
  //   loadChildren: () => import('./conference-pages/about-popover/about-popover.module').then( m => m.AboutPopoverPageModule)
  // },
  // {
  //   path: 'schedule-filter',
  //   loadChildren: () => import('./conference-pages/schedule-filter/schedule-filter.module').then( m => m.ScheduleFilterPageModule)
  // },
  // {
  //   path: 'session-detail',
  //   loadChildren: () => import('./conference-pages/session-detail/session-detail.module').then( m => m.SessionDetailPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
