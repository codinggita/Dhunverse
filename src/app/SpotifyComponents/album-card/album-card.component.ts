import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent {
  @Input() album:any;
  constructor(private router : Router){}
  handleClick(id:string){

    this.router.navigateByUrl(`/album/${id}`)
  }
}
