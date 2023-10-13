import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  search = '';
  searchForm = this.fb.nonNullable.group({
    search:'',
  })
  constructor(private fb: FormBuilder){}
  onChange(value: string){
    this.search = value ?? "";
    this.newItemEvent.emit(this.search);
  }
}
