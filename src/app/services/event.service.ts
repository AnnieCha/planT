import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class EventService {

    constructor() { }

    /*
        Event:

        eventId: int;
        Datum: date; -> irgendwo über auswertung = heute / morgen 
        Pflanze: string;
        anleitung: string;
        evtl bezeichnung -> heute ??

    *
    */


        /* Okay das muss man noch mal gucken und überlegen, nach was man tatsächlich sucht */
    getCurrenPlant(tag: string) {
        switch(tag){
          case "Heute":
            return  { eventId: 0, tag: "Heute", infotext: "Monstrera muss gegossen werden."};
            break;
          case "Roter Klee":
            return  { eventId: 1, tag: "Heute", infotext: "Klee muss gegossen werden." };
          case "Duftgeranie":
            return  { eventId: 2, tag: "Morgen", infotext: "Duftgeranie muss gegossen werden." };
          case "Aloe Vera":
            return  { eventId: 3, tag: "Morgen", infotext: "Klee muss gegossen werden." };
        }
        return  { eventId: 3, tag: "Morgen", infotext: "Klee muss gegossen werden." };
          
      }

    getAllPlants() {
        return [
            { eventId: 0, tag: "Heute", infotext: "Monstrera muss gegossen werden."},
            { eventId: 1, tag: "Heute", infotext: "Klee muss gegossen werden." },
            { eventId: 2, tag: "Morgen", infotext: "Duftgeranie muss gegossen werden." },
            { eventId: 3, tag: "Morgen", infotext: "Klee muss gegossen werden." },
          ]
    }

    /*
        Get All Plants from Date to Date ??
    */

  }