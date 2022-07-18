import { Component } from '@angular/core';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plant-app';
  menuOpen: boolean = false;


  constructor(private _userService: UserService) {  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  showMenue() {
    return this._userService.getLoggedIn()
  }

}
