import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent implements OnInit {
 @Input() musicList: Array<object>;
 constructor(){
  this.musicList=[];
  // console.log(this.musicList);
 }
 ngOnInit(): void {
  AOS.init();
  AOS.refresh();
 }
 
}
