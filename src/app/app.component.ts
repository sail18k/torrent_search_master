import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'Settings', url: '/settings', icon: 'settings' }
  ];

  public query: string = '';
  public torrents: any[] = [];
  public menuActive: boolean = false;

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  searchTorrents() {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Add any higher-level native operations here.
    });
  }

}
