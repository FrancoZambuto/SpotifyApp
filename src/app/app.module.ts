import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';

//Import routes
import { ROUTES } from './app.routes';
//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselCategoriesComponent } from './components/shared/carousel-categories/carousel-categories.component';
import { CarouselPlaylistsComponent } from './components/shared/carousel-playlists/carousel-playlists.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { CardsRecommendationsComponent } from './components/shared/cards-recommendations/cards-recommendations.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    DomseguroPipe,
    CarouselComponent,
    NewReleasesComponent,
    CategoriesComponent,
    CarouselCategoriesComponent,
    CarouselPlaylistsComponent,
    PlaylistsComponent,
    RecommendationsComponent,
    CardsRecommendationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
