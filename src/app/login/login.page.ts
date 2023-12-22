import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOptions } from '../interfaces/user-options';
import { UserData } from '../providers/user-data';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public userData: UserData, private _router: Router) {}
  ngOnInit() {}

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this._router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this._router.navigateByUrl('/signup');
  }
}
