import { AuthService } from './core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Three Bogeys';

  constructor(
    public authService: AuthService
  ) { }
  public logout(): void {
    this.authService.signOut();
  }
}
