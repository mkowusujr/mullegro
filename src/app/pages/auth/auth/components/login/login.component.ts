import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../../../core/services/api.service'
import { AuthService } from '../../../../../core/services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;
  
  constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router
  ) { }

  ngOnInit() {
    // this.isUserLogin(); 
    this.isLogin = this._auth.isLoggedIn();
  }
  
  attemptLogin(form: NgForm) {
    const apiEndpoint = 'users/login';
    console.log('Your form data : ', form.value);
    this._api.postRequest(apiEndpoint, form.value).subscribe((res: any) => {
      console.log(res);
      if (res.status) { 
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
        this._auth.setDataInLocalStorage('token', res.token);  
        this._router.navigate(['']);
      }
    })
  }

  logout(){
    this._auth.clearStorage()
    this._router.navigate(['']);
  }
}