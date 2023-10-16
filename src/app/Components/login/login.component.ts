import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingServiceService } from 'src/app/services/data-sharing-service.service';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { TokenSharingService } from 'src/app/services/token-sharing.service';


declare var particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = 'kirtan';
  constructor(private router: Router, private dataSharing: DataSharingServiceService, private spotifyApi: SpotifyApiService, private tokenSharing: TokenSharingService) {
    // this.dataSharing.data = this.username;
  }
  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }
  
  handleCancel(){
    this.router.navigateByUrl('');
  }
  async handleEnter(data:string){
    await this.spotifyApi.getAccessToken().then(async response => {
      console.log(response.data.access_token);
      this.tokenSharing.token = await response.data.access_token;
    })
    .catch(error => {
      console.error('Error:', error);
    });
    this.dataSharing.data = data;
    this.router.navigateByUrl('main');
  }
}
