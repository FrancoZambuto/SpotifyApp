import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel-playlists.component.html',
  styleUrls: ['./carousel-playlists.component.css']
})
export class CarouselPlaylistsComponent implements OnInit {


  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
