import { Component } from '@angular/core';
import { DataSharingServiceService } from 'src/app/services/data-sharing-service.service';
import { MusicApiService } from 'src/app/services/music-api.service';
import { TokenSharingService } from 'src/app/services/token-sharing.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent {
  username:string;
  accesstoken:string;
  constructor(private dataSharing: DataSharingServiceService, private MusicApiService: MusicApiService, private tokenSharing: TokenSharingService) {
    this.username = this.dataSharing.data;
    this.accesstoken = this.tokenSharing.token;
  }
  s = '';
  musicList = []
  onChange(Search: string){
    console.log(this.accesstoken? this.accesstoken: "hnofdlkfj");
    this.s = Search;
    this.MusicApiService.getSearchMusic(this.s)
      .then(response => {
        this.musicList = (response.data.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

}
