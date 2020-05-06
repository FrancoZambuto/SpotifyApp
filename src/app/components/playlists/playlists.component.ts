import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotyService.getPlayLists()
      .subscribe((data: any) => {
        this.playlists = data;
        this.loading = false;
      }, (errorService) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = errorService.error.error.message;
      });
  }

  ngOnInit() {
  }

}
