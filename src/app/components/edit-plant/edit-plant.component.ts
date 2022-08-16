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
  private sub: any;
  private plantName: string = "";
  ownName: string = "";
  startDate: Date = new Date();
  updatePlantMode!: boolean;

  constructor(
    private _plantService: PlantService,
    private _openPlantService: OpenPlantService,
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.plantName = params['name'];
    })
  }

  public setPlantInfo(): void {
    if (this.updatePlantMode) {
      this.ownName = this._openPlantService.getOwnName();
      this.startDate = this._openPlantService.getStartDate();
      this.currentFormGroup.patchValue({
        ownName: this.ownName,
        startDate: this.startDate
      })
    }
  }

  ngOnChange() {
    console.log("change", this.ownName, this.startDate);
  }
}

