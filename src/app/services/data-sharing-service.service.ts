import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingServiceService {

  constructor() { }
  private _data: string = '';
    set data(value) {
        this._data = value;
    }
    get data() {
        return this._data;
    }
    

}
