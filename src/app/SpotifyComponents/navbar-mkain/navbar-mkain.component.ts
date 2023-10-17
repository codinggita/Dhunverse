import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mkain',
  templateUrl: './navbar-mkain.component.html',
  styleUrls: ['./navbar-mkain.component.css']
})
export class NavbarMkainComponent {
  @Input() username:string='';
  search:string ='';
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private router: Router){}
  handleLogout(){
    this.router.navigateByUrl('login')
  }
  onChange(){
    this.newItemEvent.emit(this.search);
  }

}
