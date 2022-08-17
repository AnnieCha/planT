import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {Router} from '@angular/router'; 
import { User } from 'src/app/shared/models/user';
import * as crypto from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public currUser!: User;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  /*loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });*/

  constructor(private _userService: UserService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var nameUser = this.loginForm.value.username;
    var namePassword = crypto.SHA256(this.loginForm.value.password).toString();

    if (nameUser.length<1 || namePassword.length<1) {
      alert("Bitte Vollständig ausfüllen");
    } else {
      this._userService.getUser(nameUser, namePassword).subscribe((result) => {
        if (result.length>0) {
          this.currUser = result[0];
          this._userService.setLoggedIn();
          this.route.navigate(['/meine-pflanzen']);
        } else {
          // TODO später fehlermeldung implementieren
          alert("Userdaten falsch");
        }
      })
    }
  }

  navigateRegistration() {
    this.route.navigate(['/registration']);
  }


}

