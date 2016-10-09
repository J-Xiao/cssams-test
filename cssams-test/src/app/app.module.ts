import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {
  CloudSettings,
  CloudModule
} from '@ionic/cloud-angular'

const cloudsettings: Cloudsettings = {
  'core': {
    'app_id': '5bb22bdf'
  },
  'push': {
    'pluginConfig': {
      'ios': {
        'badage': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudsettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
