import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbarOpen = false;

  constructor(private elRef: ElementRef) {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar() {
    this.navbarOpen = false;
  }

   @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.navbarOpen) {
      this.closeNavbar();
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside && this.navbarOpen) {
      this.closeNavbar();
    }
  }
}
