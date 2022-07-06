import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/shared/models/plant';

@Component({
  selector: 'app-plant-info',
  templateUrl: './plant-info.component.html',
  styleUrls: ['./plant-info.component.scss']
})

export class PlantInfoComponent implements OnInit {
  public currPlant?: Plant;
  private sub: any;
  private plantName: string = "";
  editMode: boolean = false;

  constructor(
    private _plantService: PlantService,
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {
 //   this.currPlant = this._plantService.getCurrenPlant();
    this.sub = this.route.params.subscribe(params => {
      this.plantName = params['name'];
    })
    this.getPlantInfo();
  }

  public getPlantInfo(){
    this.currPlant = this._plantService.getCurrenPlant(this.plantName);
  }

  public setEditMode(status: boolean){
    this.editMode = status;
  }

}
