import { Component } from '@angular/core';
import { DataSharingServiceService } from 'src/app/services/data-sharing-service.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent {
  username:string;
  constructor(private dataSharing: DataSharingServiceService) {
    this.username = this.dataSharing.data;
  }

}
