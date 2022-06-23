import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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

  // navToggle(){
  //   let navbarLinks = document.getElementsByClassName('nav-links')[0];
  //   if (navbarLinks.style.display === "block") {
  //       navbarLinks.style.display = "none";
  //       document.body.style.overflowY = 'visible';
  //       window.onscroll = function() {};
  //   } else {
  //       navbarLinks.style.display = "block";
  //       document.body.style.overflowY = "hidden";
  //       window.onscroll = () => { window.scroll(0, 0); };
  //   }
  // }

  // let widthMatch = window.matchMedia("(min-width: 1221px)");
  // widthMatch.addEventListener('change', function(mm) {
  //     let navbarLinks = document.getElementsByClassName('nav-links')[0];
  //     if (mm.matches) {
  //         navbarLinks.style.display = "block";
  //     }
  //     else {
  //         navbarLinks.style.display = "none";
  //     }
  // });

}
