import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuActive: boolean = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  scrollTo(section: string) {
    this.router.navigate([''], { fragment: section });
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    });
  }


  closeMenu() {
    this.menuActive = false;
  }

  @HostListener('window:resize')
  onResize() {
    this.menuActive = false;
  }
}
