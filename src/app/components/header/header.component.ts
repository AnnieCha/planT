import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  isLightMode: boolean = true;

  constructor(private _translateService: TranslateService, private _userService: UserService) {
    _translateService.setDefaultLang('en');
    _translateService.use('en');
  }

  ngOnInit(): void {  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  
  showMenu(): boolean {
    return this._userService.getLoggedIn();
  }

  changeLightMode(): void {
    document.body.classList.toggle('dark-mode');
    this.isLightMode = !this.isLightMode;
    //localStorage.setItem(PrefferedThemeKey, this.isLightMode ? 'light' : 'dark');
  }

  onValueChange(language: string): void {
    this._translateService.use(language);
  }

}
