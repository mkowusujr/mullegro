import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  protectedData: any;
  loading: boolean = false;

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit(): void {
    const apiEndpoint = 'users/user/profile';
    this._api.getRequest(apiEndpoint)
    .subscribe((res: any) => this.protectedData = res);
  }
}
