import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect, IonInfiniteScroll } from '@ionic/angular';
import { Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay, filter, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  @ViewChild('filterSelect', { static: false }) filterSelect: IonSelect;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  jsonURL = 'assets/json/fitgirl.json';
  jsonData: any;
  torrentSearch = '';
  torrents: any = [];
  displayedTorrents: any = [];
  showFilter = false;
  content_loaded = false;
  page = 0;
  pageSize = 10;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
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

  handleSearch(event: any) {
    this.content_loaded = false;
    const searchTerm = event?.target?.value?.toLowerCase();

    if (searchTerm && searchTerm.trim() !== '') {
      this.page = 0;
      this.torrents = [];
      this.displayedTorrents = [];
      this.performSearch(searchTerm);
    } else {
      this.page = 0;
      this.torrents = [];
      this.displayedTorrents = [];
      this.content_loaded = true;
    }
  }

  performSearch(term: string) {
    from(this.jsonData.Sheet1)
      .pipe(
        filter((suggestion: any) =>
          suggestion['tablescraper-selected-row']
            ?.toString()
            ?.toLowerCase()
            ?.includes(term.toLowerCase())
        ),
        tap((suggestion) => this.torrents.push(suggestion)),
        tap(() => {
          if (this.displayedTorrents.length < this.pageSize) {
            this.displayedTorrents.push(this.torrents[this.displayedTorrents.length]);
          }
        })
      )
      .subscribe({
        complete: () => {
          this.content_loaded = true;
        }
      });
  }

  loadMore(event: any) {
    setTimeout(() => {
      this.page++;
      const start = this.page * this.pageSize;
      const end = start + this.pageSize;
      const moreTorrents = this.torrents.slice(start, end);
      this.displayedTorrents.push(...moreTorrents);
      event.target.complete();

      if (moreTorrents.length < this.pageSize) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
