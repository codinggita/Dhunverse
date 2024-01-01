import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dhunverse';
  href = ''
  constructor(private router: Router){}
  // getSongs() {
  // }
  ngOnInit() {
    console.log(this.href)
    $(window).on('load', () => {
      this.href = this.router.url;
      if(this.href == '/'){
        this.router.navigateByUrl('/')
      }
      else if(this.href == '/about'){
        this.router.navigateByUrl('/about')
      }
      else{
        this.router.navigateByUrl('/login')
      }
      setTimeout(() => {
        $(".main-loader").slideUp(1000, () => {
          $(".main-loader").remove(); 
        });
      }, 2000); 
    });
  }
}
