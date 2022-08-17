import { Plant } from '../shared/models/plant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, startWith, switchMap, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private _rootAdress = 'http://localhost:5200/';
  myPlants$?: Observable<Plant[]>;
  allPlants$: Observable<Plant[]>;
  specificPlant?: Plant;
  private _refresh$: Subject<void> = new Subject<void>();

  constructor(private _http: HttpClient) {
    this.allPlants$ = this._refresh$.pipe(
      startWith(''),
      switchMap(() => this._http.get<Plant[]>(this._rootAdress + 'all-plants')))
  }

  /*
  getAllPlantsFromDB() {
    this.allPlants$ = this._refresh$.pipe(
      startWith(''),
      switchMap(() =>this._http.get<Plant[]>(this._rootAdress + 'all-plants')))
   // this._http.get<Plant[]>(this._rootAdress + 'all-plants').subscribe((result) => {
   //   this.allPlants = result;
   // })
  }*/

  getPlantByName(name: string): Observable<Plant[]> {
    return (this._http.get<Plant[]>(this._rootAdress + 'plant/' + name));
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
