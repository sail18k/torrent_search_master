import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, IonSelect, ModalController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  @ViewChild('filterSelect', { static: false }) filterSelect: IonSelect;
  torrents = [
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 1',
      size: '700 MB',
      seeds: 123,
      leeches: 45,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 2',
      size: '1.4 GB',
      seeds: 456,
      leeches: 78,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 3',
      size: '3.2 GB',
      seeds: 789,
      leeches: 12,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 1',
      size: '700 MB',
      seeds: 123,
      leeches: 45,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 2',
      size: '1.4 GB',
      seeds: 456,
      leeches: 78,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 3',
      size: '3.2 GB',
      seeds: 789,
      leeches: 12,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 1',
      size: '700 MB',
      seeds: 123,
      leeches: 45,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 2',
      size: '1.4 GB',
      seeds: 456,
      leeches: 78,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 3',
      size: '3.2 GB',
      seeds: 789,
      leeches: 12,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 1',
      size: '700 MB',
      seeds: 123,
      leeches: 45,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 2',
      size: '1.4 GB',
      seeds: 456,
      leeches: 78,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 3',
      size: '3.2 GB',
      seeds: 789,
      leeches: 12,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 1',
      size: '700 MB',
      seeds: 123,
      leeches: 45,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 2',
      size: '1.4 GB',
      seeds: 456,
      leeches: 78,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 3',
      size: '3.2 GB',
      seeds: 789,
      leeches: 12,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 1',
      size: '700 MB',
      seeds: 123,
      leeches: 45,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 2',
      size: '1.4 GB',
      seeds: 456,
      leeches: 78,
    },
    {
      image: '../../../../assets/card-media.png',
      title: 'Torrent 3',
      size: '3.2 GB',
      seeds: 789,
      leeches: 12,
    },
  ];

  showFilter = false;

  content_loaded = false;

  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
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
}
