import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, startWith, switchMap, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUser = false;
  logedUser$?: Observable<User[]>;
  private _rootAdress = 'http://localhost:5200/';
  private _refresh$: Subject<void> = new Subject<void>();
  


  constructor(private _http: HttpClient) { }

  getUser(user_name: string, user_password: string): Observable<User[]> {
    return (this._http.get<User[]>(this._rootAdress + 'user/' + user_name + '/' + user_password));
    }

  userExist(user_name: string, user_email: string): Observable<User[]> {
    return (this._http.get<User[]>(this._rootAdress + 'user/' + user_name + '/' + user_email));
    }

  insertUser(newUser: any): Observable<any> {
    return this._http.post<any>(this._rootAdress + 'user/newuser', newUser);
  }


  getLoggedIn() {
    return this.loginUser;
  }

  setLoggedIn() {
    this.loginUser = true;
  }
}
