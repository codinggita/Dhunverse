import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFocusService {

  private focusSearchBarSource = new Subject<void>();

  focusSearchBar$ = this.focusSearchBarSource.asObservable();

  focusSearchBar() {
    this.focusSearchBarSource.next();
  }
  constructor() { }
}
