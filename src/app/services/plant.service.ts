import { Plant } from '../shared/models/plant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, startWith, switchMap, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private _rootAdress: string = 'http://localhost:5200/';
  private _BASE_URL: string = '/.netlify/functions/server/plant';

  myPlants$?: Observable<Plant[]>;
  allPlants$: Observable<Plant[]>;
  specificPlant?: Plant;
  plantNames!: string[];
  private _refresh$: Subject<void> = new Subject<void>();

  constructor(private _http: HttpClient) {
    this.allPlants$ = this._refresh$.pipe(
      startWith(''),
      switchMap(() => this._http.get<Plant[]>(this._BASE_URL + 'all-plants')))
  }

  getPlantByName(name: string): Observable<Plant[]> {
    return (this._http.get<Plant[]>(this._BASE_URL + 'plant/' + name));
  }

  getPlantNamesFromDb(): Observable<any[]> {
    return this._http.get<any[]>(this._BASE_URL + 'plantnames');
  }

  getMyPlantsFromDB(user_id: number) {
    this.myPlants$ = this._refresh$.pipe(
      startWith(''),
      switchMap(() => this._http.get<Plant[]>(this._BASE_URL + 'my-plants/' + user_id)))
  }

  deleteOwnPlant(user_id: number, ownName: string) {
    return this._http.delete<any>(this._BASE_URL + ownName + '/' + user_id);
  }

  refreshPlants(): void {
    this._refresh$.next();
  }

  addPlantToUser(newPlant: any): Observable<any> {
    return this._http.post<any>(this._BASE_URL + 'plant/newplant', newPlant);
  }

  updatePlantFromUser(updatedPlant: any): Observable<any> {
    return this._http.put(this._BASE_URL + 'plant', updatedPlant);
  }
}
