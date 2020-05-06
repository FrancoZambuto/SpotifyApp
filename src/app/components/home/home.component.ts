import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  fewReleases: any[] = [];
  newReleasesFlag: boolean;
  categories: any[] = [];
  fewCategories: any[] = [];
  categoriesFlag: boolean;
  loading:boolean;
  error: boolean;
  errorMessage: string;

  playlists: any[] = [];
  recommendations: any[] = [];
 

  constructor(private spotyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotyService.getNewReleases()
      .subscribe((data: any) => {
        this.newReleases = data;
        for (let i = 0; i < 12; i++) {
          this.fewReleases[i] = this.newReleases[i];
        }
        this.loading = false;
      }, (errorService) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = errorService.error.error.message;
      });
  }

  
  ngOnInit() {
    this.loading = true;
    this.error = false;
    this.newReleasesFlag = false;
    this.categoriesFlag = false;
    this.getCategories();
    this.getPlaylists();
    this.getRecommendations();

  }

  getRecommendations() {
    this.spotyService.getRecommendations().subscribe((data:any) => {
      this.recommendations = data;
    })
  }

  getPlaylists() {
    this.spotyService.getPlayLists().subscribe((data:any) => {
      this.playlists = data;
    })
  }

  getCategories() {
    this.spotyService.getCategories()
     .subscribe((data:any) => {
       this.categories = data;
       if(this.categories){ 
       this.categoriesFlag = true;
       }
       for(let i=0; i<12; i++) {
         this.fewCategories[i] = this.categories[i];
       }
      });
     }

}


