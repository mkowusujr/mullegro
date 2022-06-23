import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
