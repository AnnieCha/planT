import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _http: HttpClient) { }
  // Folgende Zeile ist relevant, wenn wir unser Backend über Netlify laufen lassen
  private _rootAdress: string = 'http://localhost:5200/';
  //private _rootAdress: string = '/.netlify/functions/server';
  /*
      Event:

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

  getAllPlants() {
    return [
      { eventId: 0, tag: "Heute", short_desc: "Monstrera muss gegossen werden." },
      { eventId: 1, tag: "Heute", short_desc: "Klee muss gegossen werden." },
      { eventId: 2, tag: "Morgen", short_desc: "Duftgeranie muss gegossen werden." },
      { eventId: 3, tag: "Morgen", short_desc: "Klee muss gegossen werden." },
    ]
  }

  /*
      Get All Plants from Date to Date ??
  */

}