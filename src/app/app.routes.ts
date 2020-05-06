import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'new-releases', component: NewReleasesComponent },
    { path: 'playlists', component: PlaylistsComponent },
    { path: 'recommendations', component: RecommendationsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

