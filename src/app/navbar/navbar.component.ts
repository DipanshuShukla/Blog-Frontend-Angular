import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navMenuActive: boolean = false
  constructor(private router: Router) {
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) {
        window.onscroll = function () { }
      }
    });
  }


  getCurRoute() { return this.router.url }

  toggleNavMenu() {
    this.navMenuActive = !this.navMenuActive
    if (this.navMenuActive) this.disableScrolling()
    else this.enableScrolling()
  }
  disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
  }

  enableScrolling() {
    window.onscroll = function () { };
  }
}
