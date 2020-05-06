import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];
  loading:boolean;
  error: boolean;
  errorMessage: string;
 

  constructor(private spotyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotyService.getCategories()
    .subscribe((data:any) => {
    this.categories = data;
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
