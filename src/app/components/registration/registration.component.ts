import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import {UserService} from 'src/app/services/user.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public currUser!: User;
  registrationForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
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
    console.log(this.registrationForm.value);
    var nameUser = this.registrationForm.value.username;
    var emailUser = this.registrationForm.value.email;
    var passwordUser = this.registrationForm.value.password;

    if (nameUser.length<1 || passwordUser.length<1 || emailUser.length<1) {
      alert("Bitte Vollständig ausfüllen");
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
        }
      })
    }
  }

  navigateLogin() {
    this.route.navigate(['/']);
  }

}
