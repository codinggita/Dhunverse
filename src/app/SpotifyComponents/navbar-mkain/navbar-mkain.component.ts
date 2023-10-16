import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mkain',
  templateUrl: './navbar-mkain.component.html',
  styleUrls: ['./navbar-mkain.component.css']
})
export class NavbarMkainComponent {
  @Input() username:string='';
  constructor(private router: Router){}
  handleLogout(){
    this.router.navigateByUrl('login')
  }

}
