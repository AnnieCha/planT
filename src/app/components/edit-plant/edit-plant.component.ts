import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditPlantService } from 'src/app/services/editPlant.service';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/shared/models/plant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { OpenPlantService } from 'src/app/services/openPlant.service';


@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.scss']
})

export class EditPlantComponent implements OnInit {
  @Input() currentFormGroup!: FormGroup;
  public currPlant?: any;
  private sub: any;
  private plantName: string = "";
  ownName: string = "";
  startDate: Date = new Date();
  updatePlantMode!: boolean;

  constructor(
    private _plantService: PlantService,
    private _openPlantService: OpenPlantService,
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.plantName = params['name'];
    })
    this.updatePlantMode = this._openPlantService.getUpdatePlantMode();
    this.getPlantInfo();
  }

  public getPlantInfo(){
    this.currPlant = this._plantService.getCurrenPlant(this.plantName);
    if (this.updatePlantMode) {
      this.ownName = this._openPlantService.getOwnName();
      this.startDate = this._openPlantService.getStartDate();
      this.currentFormGroup.patchValue({
        ownName: this.ownName,
        startDate: this.startDate
      })
    }
  }

  public savePlant(){
    let newPlant = {'plant_id': 0, 'user_id': 0, 'ownname': 'name from form'};
    this._plantService.addPlantToUser(newPlant).subscribe((result) => {
      console.log(result);
    })

  }

  ngOnChange() {
    console.log("change", this.ownName, this.startDate);
  }
}

