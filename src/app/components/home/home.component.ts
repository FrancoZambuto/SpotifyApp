import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading:boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotyService.getNewReleases()
    .subscribe((data:any) => {
    this.newReleases = data;
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
