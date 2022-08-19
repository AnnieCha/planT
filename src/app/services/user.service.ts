import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, startWith, switchMap, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUser = false;
  private _userObserv$?: Observable<User[]>;
  private _logedInUser$?: User;
 // private _rootAdress: string = '/.netlify/functions/server/plant';
  private _rootAdress = 'http://localhost:5200/';
  private _refresh$: Subject<void> = new Subject<void>();

  constructor(private _http: HttpClient) { }

  getUser(user_name: string, user_password: string): Observable<User[]> {
    this._userObserv$ = (this._http.get<User[]>(this._rootAdress + 'user/' + user_name + '/' + user_password));
    this._userObserv$.subscribe((result) => {
      this._logedInUser$ = result[0];
      console.log(this._logedInUser$.name + this._logedInUser$.id + this._logedInUser$.password);
    });
    return this._userObserv$;
  }

  userExist(user_name: string, user_email: string): Observable<User[]> {
    return (this._http.get<User[]>(this._rootAdress + 'userexist/' + user_name + '/' + user_email));
  }

  insertUser(newUser: any): Observable<any> {
    return this._http.post<any>(this._rootAdress + 'user/newuser', newUser);
  }

  getCurrentUserId(): number {
    return this._logedInUser$ ? this._logedInUser$.id : 0;
  }

  getLoggedIn() {
    return this._logedInUser$ != undefined;
  }

  setLoggedIn() {
    this.loginUser = true;
  }

  logoutUser() {
    this._logedInUser$ = undefined;
  }
}
