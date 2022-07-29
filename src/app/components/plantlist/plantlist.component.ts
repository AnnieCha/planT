import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/shared/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { ActivatedRoute } from '@angular/router';
import { PlantListService } from 'src/app/services/plantList.service';

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

  constructor(
    private _plantService: PlantService,
    private _plantListService: PlantListService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._sub = this.route.params.subscribe(params => {
      console.log("params", params);
      //TODO: der routerlink ist so noch nicht korrekt
      if(params['area'] === "meine-pflanzen"){
        this.title = 'MENU.OWN-PLANTS';
        this.type = "own";
        this._plantListService.setListType('own');
      } else {
        this.title = 'MENU.ALL-PLANTS';
        this.type = "all";
        this._plantListService.setListType('all');
      }
    });
  }

  get plants(): Plant[]{
    return this.type === "all" ? this._plantService.getAllPlants() : this._plantService.getOwnPlants();
  }

  get allPlants(): Plant[]{
    return this._plantService.getAllPlants();
  }
  
}
