import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/event.model';
import { NavController, NavParams } from '@ionic/angular';
import { GithubEventsProvider } from 'src/app/providers/github-events/github-events';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  event: Event[] = [];
  login: string | any = '';
  id: string | any = '';
  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    public navParams: NavParams,
    private geProvider: GithubEventsProvider
  ) {
    this.login = this.route.snapshot.paramMap.get('id');
    this.geProvider.getEventDetails(this.login).subscribe((events) => {
      this.event = events;
      console.log(this.event);
    });
    // this.route.params.subscribe((params: Params) => {
    //   this.login = params['id'];
    //   this.geProvider.getEventDetails(this.login).subscribe((events) => {
    //     this.event = events;
    //   });
    // });
    // this.login = navParams.get('login');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
