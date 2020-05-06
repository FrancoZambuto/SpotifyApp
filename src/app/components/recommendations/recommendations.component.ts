import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  recommendations: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotyService.getRecommendations()
      .subscribe((data: any) => {
        this.recommendations = data;
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
