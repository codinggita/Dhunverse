import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent {
 @Input() musicList: Array<object>;
 constructor(){
  this.musicList=[];
  // console.log(this.musicList);
 }
 
}
