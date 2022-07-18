import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  /*loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });*/

  constructor(private _userService: UserService, private route:Router) {  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.loginForm.value);
    var nameUser = this.loginForm.value.username;
    var namePassword = this.loginForm.value.password;

    if (nameUser == "Alisa" && namePassword == "123") {
      console.warn("success!!! Alisa");
      this._userService.setLoggedIn();
      this.route.navigate(['/meine-pflanzen']);
    } else if (nameUser == "Norm" && namePassword == "123") {
      console.warn("success!!! Norm");
      this._userService.setLoggedIn();
      this.route.navigate(['/meine-pflanzen']);
    } else if (nameUser == "Annie" && namePassword == "123") {
      console.warn("success!!! Annie");
      this._userService.setLoggedIn();
      this.route.navigate(['/meine-pflanzen']);
    } else {
      alert("Userdaten falsch");
    }

  }

}

