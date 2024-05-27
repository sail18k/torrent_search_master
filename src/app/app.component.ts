import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'Settings', url: '/settings', icon: 'settings' }
  ];

  public query: string = '';
  public torrents: any[] = [];
  public menuActive: boolean = false;
  searchResults: string[] = ['tsetset','sdfsdf','sdfsdf','test'];
  showSuggestions: boolean = false;
  loading!:any

  constructor(private platform: Platform, private loadingCtrl: LoadingController) {
    this.initializeApp();
  }

  async ngOnInit(): Promise<void> {
    this.loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      // backdropDismiss: true
    });
  }

 

  searchTorrents(event: any) {
    const query = event.target.value.trim();
    if(query.length > 0) {
this.loading.present();
    }
    else {
      this.loading.dismiss();
    }
    this.showSuggestions = query.length > 0;
  }

  selectSuggestion(suggestion: string) {
    // Handle when a suggestion is selected, e.g., update the search input with the suggestion
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Add any higher-level native operations here.
    });
  }

}
