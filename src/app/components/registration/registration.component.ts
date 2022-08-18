import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import {UserService} from 'src/app/services/user.service';
import {Router} from '@angular/router'; 
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public currUser!: User;
  registrationForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
    password2: new FormControl(''),
  });


  constructor(private _userService: UserService, private route:Router) {

   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    var nameUser = this.registrationForm.value.username;
    var emailUser = this.registrationForm.value.email;
    var passwordUser = crypto.SHA256(this.registrationForm.value.password).toString();


    if (nameUser.length<1 || passwordUser.length<1 || emailUser.length<1 || !this.registrationForm.valid) {
      alert("Bitte Vollständig ausfüllen");
    } else if(this.registrationForm.value.password != this.registrationForm.value.password2) {
      alert("Passwörter stimmen nicht überein");
    } else {
      let newUser = {'nameUser': nameUser, 'emailUser': emailUser, 'passwordUser': passwordUser};
      this._userService.userExist(nameUser, emailUser).subscribe((result) => {
        if (result.length>0) {
          alert("User existiert bereits");
        } else {
          // TODO später fehlermeldung implementieren
          this._userService.insertUser(newUser).subscribe((result) => {
            console.log(result);
          })
          this.route.navigate(['/']);
        }
      })
    }
  }

  navigateLogin() {
    this.route.navigate(['/']);
  }

}
