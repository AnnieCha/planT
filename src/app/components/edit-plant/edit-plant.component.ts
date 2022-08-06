import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditPlantService } from 'src/app/services/editPlant.service';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/shared/models/plant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';


@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.scss']
})

export class EditPlantComponent implements OnInit {
  public currPlant?: any;
  private sub: any;
  private plantName: string = "";
  ownName: string = "";
  startDate: Date = new Date();

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    date: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  constructor(
    private _plantService: PlantService,
    private _editPlantService: EditPlantService,
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {
    //this.currPlant = this._plantService.getCurrenPlant();
    this.sub = this.route.params.subscribe(params => {
      this.plantName = params['name'];
    })
    this.getPlantInfo();
  }

  public getPlantInfo(){
    this.currPlant = this._plantService.getCurrenPlant(this.plantName);
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

