import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/shared/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.scss']
})
export class PlantlistComponent implements OnInit {

  constructor(
    private _plantService: PlantService,
  ) { }

  ngOnInit(): void {

  }

  get plants(): Plant[]{
    return this._plantService.getAllPlants();
  }
  
}
