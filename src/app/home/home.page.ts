import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  menuType: string = 'overlay';

  items: string[] = [];

  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }
  constructor(private _router: Router, public alertCtrl: AlertController) {}
  ngOnInit(): void {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  isModalOpen = false;

  setOpenMd(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  routeTo(type: string) {
    if (type === 'contact') {
      this._router.navigate(['/contact']);
    } else if (type === 'remote') {
      this._router.navigate(['/test']);
    } else if (type === 'events') {
      alert('ok');
      this._router.navigate(['/events']);
    }
  }

  slides = [
    {
      title: 'Angular Ionic mobile application',
      description:
        'This is a simple app with <b>REST API</b> and <b>observables</b> to get information from the <b>Github API</b>.',
      image: 'assets/ica-slidebox-img-1.png',
    },
    {
      title: 'What is Ionic?',
      description:
        '<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.',
      image: 'assets/ica-slidebox-img-2.png',
    },
    {
      title: 'What is Angular?',
      description:
        '<b>Angular</b> is a framework for building client applications in HTML and TypeScript that compiles to JavaScript.',
      image: 'assets/ica-slidebox-img-3.png',
    },
  ];

  goTo() {
    // this.navCtrl.push(UsersPage);
  }

  showImpression() {
    let confirm = this.alertCtrl.create({
      message: 'What is your first impression on this Angular Ionic app?',
      buttons: [
        {
          text: 'Very basic',
          handler: () => {
            console.log('Very basic clicked');
          },
        },
        {
          text: 'Looks well',
          handler: () => {
            console.log('Looks well clicked');
          },
        },
      ],
    });
    confirm.finally();
  }
}
