import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() title: string | null = 'Naturist App';
  options = [{ name: 'Home', icon: 'home', route: '/home' },
    { name: 'About', icon: 'info', route: '/about' },
    { name: 'Contact', icon: 'villa', route: '/contact' },]

}
