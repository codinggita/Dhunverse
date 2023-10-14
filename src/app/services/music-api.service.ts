import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor() { }

  getRandomJoke() {
    return axios.get('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', {
      headers: {
        'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
        'x-rapidapi-key': '0c10b0524amsh3518c35fc110cefp1e23d3jsna0bb2cf7ad2d'
      }
    });
  }

  getSearchMusic(searchStr: string) {
    return axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', {
      params: {q: searchStr},
      headers: {
        'X-RapidAPI-Key': '0c10b0524amsh3518c35fc110cefp1e23d3jsna0bb2cf7ad2d',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    });
  }


  getInfos() {
    return axios.get('https://deezerdevs-deezer.p.rapidapi.com/infos', {
      headers: {
        'X-RapidAPI-Key': '0c10b0524amsh3518c35fc110cefp1e23d3jsna0bb2cf7ad2d',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    });
  }
}
