import { Plant } from '../shared/models/plant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, startWith, switchMap, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private _rootAdress: string = 'http://localhost:5200/';
  //private _rootAdress: string = '/.netlify/functions/server';

  myPlants$?: Observable<Plant[]>;
  allPlants$: Observable<Plant[]>;
  specificPlant?: Plant;
  plantNames!: string[];
  private _refresh$: Subject<void> = new Subject<void>();

  constructor(private _http: HttpClient) {
    this.allPlants$ = this._refresh$.pipe(
      startWith(''),
      switchMap(() => this._http.get<Plant[]>(this._rootAdress + 'all-plants')))
  }

  getPlantByName(name: string): Observable<Plant[]> {
    return (this._http.get<Plant[]>(this._rootAdress + 'plant/' + name));
  }

  getPlantNamesFromDb(): Observable<any[]> {
    return this._http.get<any[]>(this._rootAdress + 'plantnames');
  }

  getMyPlantsFromDB(user_id: number) {
    this.myPlants$ = this._refresh$.pipe(
      startWith(''),
      switchMap(() => this._http.get<Plant[]>(this._rootAdress + 'my-plants/' + user_id)))
  }

  deleteOwnPlant(user_id: number, ownName: string) {
    return this._http.delete<any>(this._rootAdress + ownName + '/' + user_id);
  }

  refreshPlants(): void {
    this._refresh$.next();
  }

  addPlantToUser(newPlant: any): Observable<any> {
    return this._http.post<any>(this._rootAdress + 'plant/newplant', newPlant);
  }

  updatePlantFromUser(updatedPlant: any): Observable<any> {
    return this._http.put(this._rootAdress + 'plant', updatedPlant);
  }
}
