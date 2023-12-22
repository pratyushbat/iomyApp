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
  // {
  //   path: 'event-detail/:login',
  //   loadChildren: () =>
  //     import('./angulario-pages/events/event-detail/event-detail.module').then(
  //       (m) => m.EventDetailPageModule
  //     ),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
