import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAZJsOGSiSz9umPxiGaxnJR9-XAvUMqPiI_5AgO8Hd70KBBHzEL3NuVtFuxtxUp-WVr5_4uhezhBsmdvRhVM4F-t2tMpf11GKdzfl9d-S_olnKxcshjLWHTlsH-hPbLJxlJCefwzCQsqoPk'
    });
    return this.http.get(url, {headers})
  }


  getNewReleases() {  

    return this.getQuery('browse/new-releases?limit=48')
            .pipe( map( data => data['albums'].items ));

  }


  getArtists(term: string) {
   
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
            .pipe( map( data=> data['artists'].items ));
  }


  getArtist(id: string) {
   
    return this.getQuery(`artists/${id}`);         
  }

  getTopTracks(id: string) {
    
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
            .pipe( map( data=> data['tracks']));

  }
  
}
