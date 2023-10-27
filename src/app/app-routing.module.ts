import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { LoggedInComponent } from './Components/logged-in/logged-in.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { ArtistPageComponent } from './SpotifyComponents/artist-page/artist-page.component';

const routes: Routes = [
  { path: '', component: AppMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: LoggedInComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'artist/:id', component: ArtistPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
