import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string | undefined;
  constructor(
    private _auth: AuthService,
    private _api: ApiService
  ) { }

  ngOnInit(): void {
    if (this._auth.isLoggedIn()) {
      const apiEndpoint = 'users/user/details';
      this._api.getRequest(apiEndpoint)
      .subscribe((res: any) => this.name = res.data.name);
    }
  }
}
