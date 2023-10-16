import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent {
  @Input() music:any;
  duration:string='';

  constructor(){
    this.music={}
  }
  onClick(){
    console.log(this.music)
  }
  
}
