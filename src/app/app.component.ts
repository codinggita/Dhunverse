import { Component } from '@angular/core';
import { MusicApiService } from './services/music-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dhunverse';
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
  // getSongs() {
    
  // }

}
