import { Component } from '@angular/core';
import { DataSharingServiceService } from 'src/app/services/data-sharing-service.service';
import { MusicApiService } from 'src/app/services/music-api.service';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { TokenSharingService } from 'src/app/services/token-sharing.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent {
  username:string;
  accesstoken:string;
  constructor(private dataSharing: DataSharingServiceService, private spotifyApi: SpotifyApiService, private tokenSharing: TokenSharingService) {
    this.username = this.dataSharing.data;
    this.accesstoken = this.tokenSharing.token;
  }
  s = '';
  musicList:any = []
  onChange(Search: string){
    // console.log(this.accesstoken? this.accesstoken: "hnofdlkfj");
    this.s = Search;
    if(this.s != ""){
      this.spotifyApi.searchQuery(this.accesstoken, this.s, "album")
        .then(response => {
          this.musicList = (response.data.albums.items)
          console.log(this.musicList);

        })
        .catch(error => {
          console.log(error);
        });
    }
  }

}
