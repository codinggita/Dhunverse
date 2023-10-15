import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { JokePageComponent } from './Components/joke-page/joke-page.component';
import { MusicCardComponent } from './Components/music-card/music-card.component';
import { MusicPageComponent } from './Components/music-page/music-page.component';
import { FormsModule } from '@angular/forms';
import { AppMainComponent } from './app-main/app-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JokePageComponent,
    MusicCardComponent,
    MusicPageComponent,
    AppMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
