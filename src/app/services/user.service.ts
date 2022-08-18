import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, startWith, switchMap, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUser = false;
  userObserv$?: Observable<User[]>;
  logedInUser$?: User;
  private _BASE_URL: string = '/.netlify/functions/server/plant';
  private _rootAdress = 'http://localhost:5200/';
  private _refresh$: Subject<void> = new Subject<void>();

  constructor(private _http: HttpClient) { }

  getUser(user_name: string, user_password: string): Observable<User[]> {
    this.userObserv$ = (this._http.get<User[]>(this._BASE_URL + 'user/' + user_name + '/' + user_password));
    this.userObserv$.subscribe((result) => {
      this.logedInUser$ = result[0];
      console.log(this.logedInUser$.name + this.logedInUser$.id + this.logedInUser$.password);
    });
    return this.userObserv$;
  }

  userExist(user_name: string, user_email: string): Observable<User[]> {
    return (this._http.get<User[]>(this._BASE_URL + 'userexist/' + user_name + '/' + user_email));
  }

  insertUser(newUser: any): Observable<any> {
    return this._http.post<any>(this._BASE_URL + 'user/newuser', newUser);
  }

  getCurrentUserId(): number {
    return this.logedInUser$ ? this.logedInUser$.id : 0;
  }

  getLoggedIn() {
    return this.logedInUser$ != undefined;
  }

  setLoggedIn() {
    this.loginUser = true;
  }

  logoutUser() {
    this.logedInUser$ = undefined;
  }
}
