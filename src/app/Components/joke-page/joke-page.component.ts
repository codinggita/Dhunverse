import { Component } from '@angular/core';
import { MusicApiService } from '../../services/music-api.service';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css']
})
export class JokePageComponent {
  joke:string;
  constructor(private MusicApiService: MusicApiService){
    this.joke = "";
  }
  getJoke() {
    this.MusicApiService.getRandomJoke()
      .then(response => {
        this.joke = response.data[0].joke;
        // console.log(response.data[0].joke)
      })
      .catch(error => {
        console.log(error);
      });
  }

}
