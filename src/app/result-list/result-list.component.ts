import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent  implements OnInit {

  @Input() results!: string[];

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
