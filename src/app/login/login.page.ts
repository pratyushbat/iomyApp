import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logMeIn() {
    this._router.navigate(['/home']);
  }

  constructor(private _router: Router) {}

  ngOnInit() {}
}
