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
  async onChange(Search: string){
    this.s = Search;
    await this.MusicApiService.getSearchMusic(this.s)
      .then(async response => {
        this.musicList = await (response.data.data)
      })
      .catch(error => {
        console.log(error);
      });
  }
  constructor(private MusicApiService: MusicApiService){}
}
