import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event.model';
// import { NavController, NavParams } from 'ionic-angular';

import { NavController, NavParams } from '@ionic/angular';
import { EventDetailPage } from './event-detail/event-detail.page';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { GithubEventsProvider } from 'src/app/providers/github-events/github-events';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  events: Event[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geProvider: GithubEventsProvider,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.geProvider.getEvents().subscribe((events: any) => {
      this.events = events;
    });
  }

  ngOnInit(): void {}

  goToDetails(login: string) {
    this.router.navigate(['/event-detail', login], {
      relativeTo: this.route,
    });
    // this.navCtrl.navigateForward(EventDetailPage, { login });
  }
}
