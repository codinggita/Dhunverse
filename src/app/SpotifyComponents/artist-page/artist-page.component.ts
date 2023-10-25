import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { TokenSharingService } from 'src/app/services/token-sharing.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
  id: any;
  albumList: any = [];
  token:string;
  constructor(private route: ActivatedRoute, private spotifyService: SpotifyApiService, private tokenShared: TokenSharingService){
    this.token = this.tokenShared.token;
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.token)
  }
  ngOnInit(): void {
    this.spotifyService.searchartistAlbums(this.token, this.id)
    .then(async response => {
      this.albumList = await (response.data.items)
      console.log(this.albumList)
    })
    .catch(error => {
      console.log(error);
    });
  }
}
