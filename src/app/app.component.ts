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

  
  constructor(private _translateService: TranslateService, private _userService: UserService) {
    _translateService.setDefaultLang('en');
    _translateService.use('en');
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  chooseLanguage(lang: string){
    this._translateService.use(lang);
  }

  showMenue() {
    return this._userService.getLoggedIn()
  }
  
  onBtnClick = () => {
    document.body.classList.toggle("dark");
    console.log("darkThemeWorks");
  };


}

