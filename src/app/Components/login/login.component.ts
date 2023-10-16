import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingServiceService } from 'src/app/services/data-sharing-service.service';


declare var particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = 'kirtan';
  constructor(private router: Router, private dataSharing: DataSharingServiceService) {
    // this.dataSharing.data = this.username;
  }
  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }
  
  handleCancel(){
    this.router.navigateByUrl('');
  }
  handleEnter(data:string){
    
    this.dataSharing.data = data;
    this.router.navigateByUrl('main');
  }
}
