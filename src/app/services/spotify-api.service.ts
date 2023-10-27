import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  clientID:string = '8f865da74f0a48978dac0b132d482bd6';
  clientSecret:string = '30ff5baebfa5419b988a6793bb432c60';
  SPOTIFY_API_AUTH_URL:string = 'https://accounts.spotify.com/api/token';
  SPOTIFY_API_URL:string = 'https://api.spotify.com/v1/';
  constructor() { }

  getAccessToken() {
    const data = 'grant_type=client_credentials';
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(this.clientID + ':' + this.clientSecret)
    };

    return axios.post(this.SPOTIFY_API_AUTH_URL, data, { headers });
  }
  searchQuery(token:string, query:string, type:string) {
    const headers = {
      'Authorization': "Bearer " + token
    }
    const params = {
      q: query,
      type: type
    }
    return axios.get(this.SPOTIFY_API_URL + `search?q=${params.q}&type=${params.type}&market=ES&limit=20&offset=0`, {headers})
  }
  searchartistAlbums(token:string, id:string){
    const headers = {
      'Authorization': "Bearer " + token
    }
    console.log(id, " ", token);
    return axios.get(this.SPOTIFY_API_URL + `artists/${id}/albums?limit=50&market=ES&offset=0`, {headers})
  }
  
  searchArtist(token:string, id:string){
    const headers = {
      'Authorization': "Bearer " + token
    }
    console.log(id, " ", token);
    return axios.get(this.SPOTIFY_API_URL + `artists/${id}`, {headers})
  }
}
