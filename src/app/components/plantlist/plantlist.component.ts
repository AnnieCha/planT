import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/shared/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { ActivatedRoute } from '@angular/router';
import { PlantListService } from 'src/app/services/plantList.service';
import { Observable, map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { OpenPlantService } from 'src/app/services/openPlant.service';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.scss']
})
export class PlantlistComponent implements OnInit {
  public type: string = "all";
  public title: string = "Alle Pflanzen";

  plants$?: Observable<Plant[]> = this._plantService.allPlants$.pipe(
    map((plants: Plant[]) => (plants ? plants.filter((plant: Plant) => !!plant) : []))
  );

  constructor(
    private _plantService: PlantService,
    private _plantListService: PlantListService,
    private _userService: UserService,
    private _openPlantService: OpenPlantService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['area'] === "meine-pflanzen"){
        this.title = 'MENU.OWN-PLANTS';
        this.type = "own";
        this._plantService.getMyPlantsFromDB(this._userService.getCurrentUserId());
        this._openPlantService.setOwnPlant(true);
        this.plants$ = this._plantService.myPlants$?.pipe(
          map((plants: Plant[]) => (plants ? plants.filter((plant: Plant) => !!plant) : []))
        );
        this._plantListService.setListType('own');
      } else {
        this.title = 'MENU.ALL-PLANTS';
        this.type = "all";
        this._openPlantService.setOwnPlant(false);
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
}
