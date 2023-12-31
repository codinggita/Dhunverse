import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MusicCardComponent } from './Components/music-card/music-card.component';
import { MusicPageComponent } from './Components/music-page/music-page.component';
import { FormsModule } from '@angular/forms';
import { AppMainComponent } from './app-main/app-main.component';
import { LoggedInComponent } from './Components/logged-in/logged-in.component';
import { NavbarMkainComponent } from './SpotifyComponents/navbar-mkain/navbar-mkain.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContentComponent } from './Components/content/content.component';
import { ArtistPageComponent } from './SpotifyComponents/artist-page/artist-page.component';
import { AlbumCardComponent } from './SpotifyComponents/album-card/album-card.component';
import { AlbumPageComponent } from './SpotifyComponents/album-page/album-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MusicCardComponent,
    MusicPageComponent,
    AppMainComponent,
    LoggedInComponent,
    NavbarMkainComponent,
    AboutPageComponent,
    FooterComponent,
    ContentComponent,
    ArtistPageComponent,
    AlbumCardComponent,
    AlbumPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
