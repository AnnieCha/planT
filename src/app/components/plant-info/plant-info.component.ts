import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpenPlantService } from 'src/app/services/openPlant.service';
import { PlantService } from 'src/app/services/plant.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  //ownName: string = "";
  //startDate: Date = new Date();

  formGroup: FormGroup = new FormGroup({
    ownName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    startDate: new FormControl('')
  }); 

  constructor(
    private _plantService: PlantService,
    private _openPlantService: OpenPlantService,
    private _router: Router,
    private _route: ActivatedRoute
    ) {}


  ngOnInit(): void {
 //   this.currPlant = this._plantService.getCurrenPlant();
    this.sub = this._route.params.subscribe(params => {
      this._plantName = params['name'];
    })
    this.getPlantInfo();
    this.editMode = this._openPlantService.getEditMode();
  }

  public getPlantInfo(){
    this.currPlant = this._plantService.getCurrenPlant(this._plantName);
  }

  public onFormSubmit(): void {
    this._plantService.addPlant( this.formGroup.get('ownName')?.value, this.currPlant);
    this.setEditMode(false);
    this._router.navigate(['/meine-pflanzen']);
  }

  public setEditMode(status: boolean){
    this.editMode = status;
  }

}
