import { Component, OnInit } from '@angular/core';
import { SuggestionsComponent } from '../suggestions/suggestions.component';
import { ResultListComponent } from '../result-list/result-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchQuery: string = '';
  suggestions: string[] = [];
  results: string[] = [];

  private allData: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    if (query.length > 0) {
      this.suggestions = this.allData.filter(item => item.toLowerCase().includes(query));
    } else {
      this.suggestions = [];
    }
  }

  onSelectSuggestion(suggestion: any) {
    this.searchQuery = suggestion;
    this.suggestions = [];
    this.results = this.allData.filter(item => item.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

}
