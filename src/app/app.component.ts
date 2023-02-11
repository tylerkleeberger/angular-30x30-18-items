import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AuthService } from './login/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Detailed Item Actions';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/main', icon: 'domain', title: 'Main'},
    { path: '/main/items', icon: 'list', title: 'Items' },
  ];

  examples = [
    { path: '/main/secondary', icon: 'motorcycle', title: 'Secondary' },
    { path: '/main/dictionary', icon: 'book', title: 'Site Dictionary' },
  ]

  constructor(private authService: AuthService) { }

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  logout() {
    this.authService.logout();
  }
}