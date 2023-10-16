import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { LoggedInComponent } from './Components/logged-in/logged-in.component';

const routes: Routes = [
  { path: '', component: AppMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: LoggedInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
