import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

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

  constructor() {  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.loginForm.value);
    var nameUser = this.loginForm.value.username;
    var namePassword = this.loginForm.value.password;

    if (nameUser == "Alisa" && namePassword == "123") {
      console.warn("success!!! Alisa");
    } else if (nameUser == "Norm" && namePassword == "123") {
      console.warn("success!!! Norm");
    } else if (nameUser == "Annie" && namePassword == "123") {
      console.warn("success!!! Annie");
    }

  }

}

