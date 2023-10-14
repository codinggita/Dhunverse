import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent {
  @Input() music:any;
  

  constructor(){
    type Music = {
      [key: string]: any;
      title?: string;
      image?: string;
    };
    this.music={}
  }

  onClick(){
    console.log(this.music)
  }
  
}
