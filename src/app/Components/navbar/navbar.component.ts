import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  search = '';
  constructor(){}
  onChange(){
    this.newItemEvent.emit(this.search);
  }
  ngOnInit(): void {
      
  }
}
