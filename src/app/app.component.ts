import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plant-app';
  menuOpen: boolean = false;

  
  constructor(private _translateService: TranslateService) {
    _translateService.setDefaultLang('en');
    _translateService.use('en');
  }


  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  chooseLanguage(lang: string){
    this._translateService.use(lang);
  }

  onBtnClick = () => {
    document.body.classList.toggle("dark-theme");
    console.log("darkThemeWorks");
  };


}

