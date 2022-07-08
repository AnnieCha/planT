import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/shared/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.scss']
})
export class PlantlistComponent implements OnInit {
  title: string = "Alle Pflanzen";
  private _sub: any;

  constructor(
    private _plantService: PlantService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._sub = this.route.params.subscribe(params => {
      if(params['name'] === "own"){
        this.title = "Meine Pflanzen";
      } else {
        this.title = "Alle Pflanzen";
      }
    })
  }

  get plants(): Plant[]{
    return this._plantService.getAllPlants();
  }
  
}
