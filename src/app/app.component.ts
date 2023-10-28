import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dhunverse';
  constructor(private router: Router){}
  // getSongs() {
  // }
  ngOnInit() {
    $(window).on('load', () => {
      // this.router.navigateByUrl('')
      setTimeout(() => {
        $(".main-loader").slideUp(1000, () => {
          // Animation duration set to 1 second (1000 milliseconds)
          $(".main-loader").remove(); // Remove the loader after the animation
        });
      }, 2000); // Delay for 2 seconds (2000 milliseconds) before starting the animation
    });
  }
}
