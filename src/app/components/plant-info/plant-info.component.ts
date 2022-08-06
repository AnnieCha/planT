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
    startDate: new FormControl('', [Validators.required])
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
    this._plantService.getPlantByName(this._plantName).subscribe((result) => {
      this.currPlant = result[0];
      console.log(this.currPlant);
      console.log('name', this.currPlant.name);
    })
    // old: this.currPlant = this._plantService.getCurrenPlant(this._plantName);
  }

  public onFormSubmit(): void {
    console.log("Date", this.formGroup.get('startDate')?.value);
    console.log("Name", this.formGroup.get('ownName')?.value);
    const myPlant = {'user_id': 1, 'plant_id': this.currPlant.plant_id, 'ownname': this.formGroup.get('ownName')?.value, 'startdate': this.formGroup.get('startDate')?.value}
    this._plantService.addPlantToUser(myPlant).subscribe((result) => {
      if(result.affectedRows == 1){
        console.log('erfolgreich hinzugefügt');
      } else {
        console.log('Fehler');
      }
    });
  //  this._plantService.addPlant( this.currPlant, this.formGroup.get('ownName')?.value,this.formGroup.get('startDate')?.value);
    this.setEditMode(false);
   // this._router.navigate(['/meine-pflanzen']);
  }

  public setEditMode(status: boolean){
    this.editMode = status;
  }

}
