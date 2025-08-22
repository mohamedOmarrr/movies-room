import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements AfterViewInit {
  private getResize!:ResizeObserver
  @ViewChild('navHeight') nav!:ElementRef


  ngAfterViewInit(): void {
 
  }
  isOpen = false;

toggleMenu() {
  this.isOpen = !this.isOpen;
}
}
