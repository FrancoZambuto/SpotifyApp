import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public bearer : any;

  constructor(private http: HttpClient) { }

    //This method called the endpoint which gets the new releases
  getNewReleases() { 
      const url = "http://backspotify.azurewebsites.net/releases";
      return this.http.get(url).pipe(map(data => data['items']));
      // return this.http.get(url).pipe( map( data => data['albums'].items ));n
   }

  getArtists(term: string) {   
    return this.http.get(`http://backspotify.azurewebsites.net/search/${term}`)
            .pipe( map( data=> {
               return data['artists'].items }));
  }

  getArtist(id: string) {
    return this.http.get(`http://backspotify.azurewebsites.net/artist/${id}`);         
  }

  getTopTracks(id: string) {
    return this.http.get(`http://backspotify.azurewebsites.net/toptracks/${id}`)
            .pipe( map( data=> data['tracks']));
  }
  
  getCategories() {
    return this.http.get("http://backspotify.azurewebsites.net/category")
            .pipe(map(data => data['items']));
     
  }

  getPlayLists() {
    return this.http.get("http://backspotify.azurewebsites.net/playlists")
            .pipe(map(data => data['items']));    
  }

  getRecommendations() {
    return this.http.get("http://backspotify.azurewebsites.net/recommendations");
            // .pipe(map(data => data['tracks']));    
  }


}
