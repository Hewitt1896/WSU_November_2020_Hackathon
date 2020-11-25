import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Golf-Management-App';

  constructor(
    public authService: AuthService
  ) { }
  public logout(): void {
    this.authService.signOut();
  }
}
