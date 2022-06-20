import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/shared/models/plant';

@Component({
  selector: 'app-plant-info',
  templateUrl: './plant-info.component.html',
  styleUrls: ['./plant-info.component.scss']
})

export class PlantInfoComponent implements OnInit {
  public currPlant?: Plant;

  constructor(
    private _plantService: PlantService
    ) {}


  ngOnInit(): void {
    this.currPlant = this._plantService.getCurrenPlant();
  }

}
