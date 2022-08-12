import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {Router} from '@angular/router'; 
import { User } from 'src/app/shared/models/user';

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
    console.log(this.loginForm.value);
    var nameUser = this.loginForm.value.username;
    var namePassword = this.loginForm.value.password;

    if (nameUser.length<1 || namePassword.length<1) {
      alert("Bitte Vollständig ausfüllen");
    } else {
      this._userService.getUser(nameUser, namePassword).subscribe((result) => {
        if (result.length>0) {
          this.currUser = result[0];
          console.log(result.length);
          console.log(this.currUser);
          console.log("'name', this.currUser.name");
          console.log('name', this.currUser.name);
          this._userService.setLoggedIn();
          this.route.navigate(['/meine-pflanzen']);
        } else {
          // TODO später fehlermeldung implementieren
          alert("Userdaten falsch");
        }
      })
    }
  }

}

