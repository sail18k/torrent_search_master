import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent  implements OnInit {

  @Input() suggestions!: string[];
  @Output() selectSuggestions: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectSuggestion(suggestion: string) {
    this.selectSuggestions.emit(suggestion);
  }

}
