import { Component } from '@angular/core';
import { MusicApiService } from '../services/music-api.service';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent {
  s = '';
  musicList = []
  onChange(Search: string){
    this.s = Search;
    this.MusicApiService.getSearchMusic(this.s)
      .then(response => {
        this.musicList = (response.data.data)
      })
      .catch(error => {
        console.log(error);
      });
  }
  constructor(private MusicApiService: MusicApiService){}
}
