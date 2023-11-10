import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { TokenSharingService } from 'src/app/services/token-sharing.service';
import * as $ from 'jquery'
import * as AOS from 'aos';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
  id:any;
  token:string = ''
  trackList:any = []
  flag = 0;
  flag2 = 0;
  constructor(private route: ActivatedRoute, private spotifyService: SpotifyApiService, private tokenShared: TokenSharingService, private router: Router){
    this.token = this.tokenShared.token;
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.token)
  }
  ngOnInit(): void {
      AOS.init();
      this.spotifyService.searchAlbum(this.token, this.id)
      .then(async response => {
        this.trackList = await (response.data.items)
        console.log(this.trackList)
      })
      .catch(error => {
        console.log(error);
      });

        // Handle play button click
        
  }

  handlePlay(url:string, track_name:string, artistName:string){
    const audioPlayer = document.getElementById('audio-player') as HTMLAudioElement;
    if(url !== null){
      this.flag = 1;
      this.flag2 = 1;
      audioPlayer.src = url;
      audioPlayer.play();
      $('#footer-track h2').text('Now Playing: ' + track_name);
      $('#footer-artist').text('By ' + artistName);
    }
    else{
      this.flag = 0;
      $('#footer-track h2').text(track_name + ' will made available soon');
    }
  }

  handleBack(){
    this.router.navigateByUrl("/main")
  }

  handlePause(){
    var audiop = document.getElementById('audio-player') as HTMLAudioElement
    this.flag2 = 0;
    audiop.pause()
  }
  handlePlay2(){
    var audiop = document.getElementById('audio-player') as HTMLAudioElement
    this.flag2 = 1;
    audiop.play()
  }
}
