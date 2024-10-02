import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: "./header.component.css"
})
export class HeaderComponent {
  isMenuOpen = false;
  imagePath: string = "assets/images/Beautiful-rose-flower-wallpaper-mobile.jpg";

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
