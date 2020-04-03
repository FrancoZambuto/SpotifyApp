import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotyService: SpotifyService) { 
    this.loading = true;
    this.activatedRoute.params.subscribe( params => {
       this.getArtist(params['id']);
       this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotyService.getArtist(id)
      .subscribe(artist => {
        console.log(artist);
        this.artist = artist;
        this.loading = false;
      
      });
  }

  getTopTracks(id: string) {
    this.spotyService.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
        console.log(topTracks);
      });
  }

}
