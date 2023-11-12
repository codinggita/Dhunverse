import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchFocusService } from 'src/app/services/search-focus.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() newItemEvent = new EventEmitter<string>();
  private subscription: Subscription= new Subscription();
  search = '';
  constructor(private searchService: SearchFocusService, private elementRef: ElementRef){}
  onChange(){
    this.newItemEvent.emit(this.search);
  }
  ngOnInit(): void {
    this.subscription = this.searchService.focusSearchBar$.subscribe(() => {
      this.elementRef.nativeElement.querySelector('input').focus();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
