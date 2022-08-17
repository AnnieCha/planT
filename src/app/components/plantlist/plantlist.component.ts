import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/shared/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { ActivatedRoute } from '@angular/router';
import { PlantListService } from 'src/app/services/plantList.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.scss']
})
export class PlantlistComponent implements OnInit {
  // type eher als enum?
  public type: string = "all";
  public title: string = "Alle Pflanzen";
  private _sub: any;

  plants$?: Observable<Plant[]> = this._plantService.allPlants$.pipe(
    map((plants: Plant[]) => (plants ? plants.filter((plant: Plant) => !!plant) : []))
  );

  constructor(
    private _plantService: PlantService,
    private _plantListService: PlantListService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._sub = this.route.params.subscribe(params => {
      //TODO: der routerlink ist so noch nicht korrekt
      if(params['area'] === "meine-pflanzen"){
        this.title = 'MENU.OWN-PLANTS';
        this.type = "own";
        this._plantService.getMyPlantsFromDB(1);
        this.plants$ = this._plantService.myPlants$?.pipe(
          map((plants: Plant[]) => (plants ? plants.filter((plant: Plant) => !!plant) : []))
        );
        this._plantListService.setListType('own');
      } else {
        this.title = 'MENU.ALL-PLANTS';
        this.type = "all";
        this._plantListService.setListType('all');
        this.plants$ = this._plantService.allPlants$.pipe(
          map((plants: Plant[]) => (plants ? plants.filter((plant: Plant) => !!plant) : []))
        );
      }
    });
  }

  onPlantDelete(): void {
    this._plantService.refreshPlants();
  }

  /*
  get plants(): Observable<Plant[]>{
    if(this.type === "all") {
      this.plants$ = this._plantService.allPlants$?
    }
 //   return this.type === "all" ? this._plantService.getAllPlants() : this._plantService.getMyPlants();
  }
/*
  get allPlants(): Plant[]{
    return this._plantService.getAllPlants();
  }
  */
}
