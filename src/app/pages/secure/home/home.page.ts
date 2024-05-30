import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  content_loaded = false;

  constructor() { }

  handleSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.content_loaded = false;
    setTimeout(() => {
      this.content_loaded = true;
    }, 3000);
  }

  ngOnInit() {

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }

}
