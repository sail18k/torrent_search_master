import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, IonSelect, ModalController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  @ViewChild('filterSelect', { static: false }) filterSelect: IonSelect;
  jsonURL = 'assets/json/fitgirl.json';
  jsonData: any;
  torrentSearch = '';
  torrents: any = [];

  showFilter = false;

  content_loaded = false;

  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Fake timeout
    this.getJSON().subscribe((data) => {
      this.jsonData = data;
      this.content_loaded = true;
    });
  }

  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  openFilter() {
    this.filterSelect.open();
  }

  filterTorrents(event: any) {
    const query = event.target.value.toLowerCase();
    this.content_loaded = false;
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }

  async handleSearch(event: any) {
    this.content_loaded = false;
    const searchTerm = event?.target?.value?.toLowerCase();

    if (searchTerm && searchTerm.trim() !== '') {
      await this.performSearch(searchTerm);
    } else {
      this.torrents = [];
     this.content_loaded = true;
    }
  }

  async performSearch(term: string) {
    try {
        // Simulate an asynchronous search operation (replace this with your actual search logic)
        const allPossibleSuggestions = this.jsonData.Sheet1;

        // Filter the suggestions based on the search term
        this.torrents = allPossibleSuggestions.filter((suggestion) =>
            suggestion['tablescraper-selected-row']
                ?.toString()
                ?.toLowerCase()
                ?.includes(term.toLowerCase())
        );

        this.content_loaded = true; // Setting content_loaded after filtering
    } catch (error) {
        console.error('Error during search:', error);
    }
}

}
