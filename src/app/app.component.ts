import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plant-app';
  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onBtnClick = () => {
    document.body.classList.toggle("dark-theme");
    console.log("darkThemeWorks");
  };

  /*function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-theme");
    
}*/

}

