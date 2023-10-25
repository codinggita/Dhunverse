import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingServiceService } from 'src/app/services/data-sharing-service.service';
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
  constructor(private router: Router, private dataSharing: DataSharingServiceService, private spotifyApi: SpotifyApiService, private tokenSharing: TokenSharingService) {
    this.username = this.dataSharing.data;
    this.accesstoken = this.tokenSharing.token;
  }
  s = '';
  artistList:any = []
  onChange(Search: string){
    // console.log(this.accesstoken? this.accesstoken: "hnofdlkfj");
    this.s = Search;
    if(this.s != ""){
      this.spotifyApi.searchQuery(this.accesstoken, this.s, "artist")
        .then(response => {
          this.artistList = (response.data.artists.items)
          console.log(this.artistList);

        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  handleArtist(artistID:string){
    this.router.navigateByUrl(`artist/${artistID}`)
  }

}
