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
      'Authorization': 'Bearer BQCY8zAt17Mi4_Vbvsk3mIqM2f4VYhW_tOlWT55CiVCrrlFDL_DjfpxvPlcTKMd7y9r8OacoUNXCv2HMWAfnOoTcW9tVGVjKvRBV3xE7-e595MXJxjAois4MWMVK8cejfyVl1eOpQFNMzC-o'
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
