import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  isLightMode: boolean = true;

  constructor(private _translateService: TranslateService) {
    _translateService.setDefaultLang('en');
    _translateService.use('en');
  }
  
  chooseLanguage(lang: string): void {
    this._translateService.use(lang);
  }

  ngOnInit(): void {  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  
  changeLightMode(): void {
    document.body.classList.toggle('dark-mode');
    //localStorage.setItem(PrefferedThemeKey, this.isLightMode ? 'light' : 'dark');
  }


 
}
