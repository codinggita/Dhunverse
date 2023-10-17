import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenSharingService {
  constructor() { }
  private _token: string='';
  set token(value) {
    this._token = value;
}
get token() {
    return this._token;
}
}
