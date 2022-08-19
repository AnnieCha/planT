import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wateringevent } from '../shared/models/wateringevent';
import { Observable, startWith, switchMap, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class EventService {
    private _rootAdress = 'http://localhost:5200/';
    currentEvents$?: Observable<Wateringevent[]>;
    private _refresh$: Subject<void> = new Subject<void>();


    constructor(private _http: HttpClient) { 
     /* 
      this.currentEvents$ = this._refresh$.pipe(
      startWith(''),
      switchMap(() => this._http.get<Wateringevent[]>(this._rootAdress + 'userevents/'+this.user_id)))
      console.log(this.user_id + "!!!!! user id");
      */
    }
/*
      eventId: int;
      Datum: date; -> irgendwo über auswertung = heute / morgen 
      Pflanze: string;
      anleitung: string;
      evtl bezeichnung -> heute ??

  *
  */
 
  updateEvent(updatedPlant: any): Observable<any> {
    return this._http.put(this._rootAdress + 'plant/date', updatedPlant);
  }


  /* Okay das muss man noch mal gucken und überlegen, nach was man tatsächlich sucht */
  getCurrenPlant(tag: string) {
    switch (tag) {
      case "Heute":
        return {
          children: [{ name: 'Gießen Aloe Vera' }, { name: 'Gießen Palme' }, { name: 'Gießen Palme am Fenster' }]
        };
        break;
      case "Morgen":
        return { children: [{ name: 'Gießen Aloe Vera' }, { name: 'Gießen Palme' }, { name: 'Gießen Palme2' }] };
      case "Mittwoch":
        return { children: [{ name: 'Gießen Aloe Vera' }, { name: 'Gießen Palme' }, { name: 'Gießen Palme2' }] };
      case "Donnerstag":
        return { children: [{ name: 'Gießen Aloe Vera' }, { name: 'Gießen Palme' }, { name: 'Gießen Palme2' }] };
    }
    return { children: [{ name: 'Gießen Aloe Vera' }, { name: 'Gießen Palme' }, { name: 'Gießen Palme2' }] };
  }
  
    getMyEvents(user_id:number) {
      this.currentEvents$ = this._refresh$.pipe(
        startWith(''),
        switchMap(() => this._http.get<Wateringevent[]>(this._rootAdress + 'userevents/'+user_id)))
        console.log(user_id + "!!!!! user id");
  }

    /*
        Get All Plants from Date to Date ??
    */



  }
