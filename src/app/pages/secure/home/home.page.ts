import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', '../settings/settings.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('iframeElement') iframeElement: ElementRef;
  content_loaded = false;
  iframeUrl: any;
  jsonURL = 'assets/json/fitgirl.json';
  jsonData: any;
  suggestions: string[] = [];

  torrents = [
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 1',
      size: '700 MB',
      seeds: 123,
      leeches: 45
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 2',
      size: '1.4 GB',
      seeds: 456,
      leeches: 78
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 3',
      size: '3.2 GB',
      seeds: 789,
      leeches: 12
    }
  ];

  constructor(private http: HttpClient) {}

  handleSearch(event: any) {
    this.content_loaded = false;
    const searchTerm = event?.target?.value?.toLowerCase();
    if (searchTerm && searchTerm.trim() !== '') {
      this.performSearch(searchTerm);
    } else {
      this.suggestions = [];
    }
    this.content_loaded = true;
  }

  handleSelected(value: any) {
    alert(value);
  }

  performSearch(term: string) {
    // Replace this with your actual search logic
    const allPossibleSuggestions = this.jsonData;
    this.suggestions = allPossibleSuggestions.Sheet1.filter((suggestion) =>
      suggestion['tablescraper-selected-row']
        ?.toString()
        ?.toLowerCase()
        ?.includes(term.toLowerCase())
    );
  }

  async ngOnInit() {
    this.getJSON().subscribe((data) => {
      this.jsonData = data;
      this.content_loaded = true;
    });
  }

  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
