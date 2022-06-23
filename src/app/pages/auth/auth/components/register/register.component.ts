import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLogin: boolean = false;

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.isUserLogin();
  }

  attemptSignup(form: NgForm) {
    const apiEndpoint = '/users/register';
    console.log('Your form data : ', form.value);
    this._api.postRequest(apiEndpoint, form.value)
    .subscribe((res) => {
      console.log(res);
      if (res.status) { 
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
        this._auth.setDataInLocalStorage('token', res.token);  
        this._router.navigate(['']);
      }
      else {
        alert(res.msg);
      }
    })
  }

  isUserLogin(){
    if(this._auth.getUserDetails() != null)
        this.isLogin = true;
  }
}
