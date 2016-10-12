import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, public push: Push) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.register();

      StatusBar.styleDefault();
    });
  }

  register () {
    this.push.register()
      .then((token: PushToken) => {
        console.log("Token saved: " + token.token);
        return this.push.saveToken(token);
      },
      (reason) => {
        console.log("Error with registration, message is: " + reason);
      });
  }

  subscribe () {
    this.push.rx.notification()
      .subscribe((msg) => {
        alert(msg.title + ': ' + msg.text);
      });
  }
}
