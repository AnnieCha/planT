import { Component } from '@angular/core';
<<<<<<< Updated upstream
import {UserService} from 'src/app/services/user.service';
=======
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plant-app';

<<<<<<< Updated upstream
  constructor(private _userService: UserService) {
  }

  
=======

  constructor(private _translateService: TranslateService, private _userService: UserService) {
    _translateService.setDefaultLang('en');
    _translateService.use('en');
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  chooseLanguage(lang: string) {
    this._translateService.use(lang);
  }

  showMenue() {
    return this._userService.getLoggedIn()
  }

  onBtnClick = () => {
    document.body.classList.toggle("dark-theme");
    console.log("darkThemeWorks");
  };
  /*
  function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-theme");
  }
  
  */


>>>>>>> Stashed changes
}

