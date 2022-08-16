import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plant-app';
  menuOpen: boolean = false;
  isLightMode: boolean = true;

  
  constructor(private _translateService: TranslateService, private _userService: UserService) {
    _translateService.setDefaultLang('en');
    _translateService.use('en');
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  chooseLanguage(lang: string): void {
    this._translateService.use(lang);
  }

  //TODO: reset this
  showMenue(): boolean {
    return true;
    // return this._userService.getLoggedIn()
  }

  changeLightMode(): void {
    document.body.classList.toggle('dark-mode');
    //localStorage.setItem(PrefferedThemeKey, this.isLightMode ? 'light' : 'dark');
  }
  


}

