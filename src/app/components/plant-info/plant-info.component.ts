import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenPlantService } from 'src/app/services/openPlant.service';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/shared/models/plant';

@Component({
  selector: 'app-plant-info',
  templateUrl: './plant-info.component.html',
  styleUrls: ['./plant-info.component.scss']
})

export class PlantInfoComponent implements OnInit {
  public currPlant!: Plant;
  private sub: any;
  private _plantName: string = "";
  public editMode: boolean = false;

  constructor(
    private _plantService: PlantService,
    private _openPlantService: OpenPlantService,
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {
 //   this.currPlant = this._plantService.getCurrenPlant();
    this.sub = this.route.params.subscribe(params => {
      this._plantName = params['name'];
    })
    this.getPlantInfo();
    this.editMode = this._openPlantService.getEditMode();
  }

  public getPlantInfo(){
    this.currPlant = this._plantService.getCurrenPlant(this._plantName);
  }

  public add(){
    this._plantService.addPlant("TestName", this.currPlant);
    this.setEditMode(false);
  }

  public setEditMode(status: boolean){
    this.editMode = status;
  }

}
