import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  clientID:string = '8f865da74f0a48978dac0b132d482bd6';
  clientSecret:string = '30ff5baebfa5419b988a6793bb432c60';
  SPOTIFY_API_URL:string = 'https://accounts.spotify.com/api/token';
  constructor() { }

  getAccessToken() {
    const data = 'grant_type=client_credentials';
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(this.clientID + ':' + this.clientSecret)
    };

    return axios.post(this.SPOTIFY_API_URL, data, { headers });
  }
  
}
