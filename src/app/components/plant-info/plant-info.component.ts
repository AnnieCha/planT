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
  currPlant!: Plant;
  private sub: any;
  private _plantName: string = '';
  editMode: boolean = false;  
  private _updatePlantMode: boolean = false;

  myGroup: FormGroup = new FormGroup({
    ownName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    startDate: new FormControl('', [Validators.required])
  });

  constructor(
    private _plantService: PlantService,
    private _openPlantService: OpenPlantService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(params => {
      this._plantName = params['name'];
    })
    this._updatePlantMode = this._openPlantService.getUpdatePlantMode();
    this.editMode = this._openPlantService.getEditMode();
    this.setPlantInfo();
  }

  public setPlantInfo() {
    this._plantService.getPlantByName(this._plantName).subscribe((result) => {
      this.currPlant = result[0];
    });
    if(this._updatePlantMode){
      this.myGroup.patchValue({
        ownName: this._openPlantService.getOwnName(),
        startDate: this._openPlantService.getStartDate()
      })
    }
  }

  public onFormSubmit(): void {
    if (this._updatePlantMode) {
      const updatedPlant = { 'user_id': 1, 'plant_id': this.currPlant.plant_id, 'ownname': this.myGroup.get('ownName')?.value, 'startdate': this.myGroup.get('startDate')?.value }
      const formerName = this._openPlantService.getOwnName();
      this._plantService.updatePlantFromUser(updatedPlant).subscribe((result) => {
        if (result.affectedRows == 1) {
          console.log('erfolgreich hinzugefügt');
        } else {
          console.log('Fehler');
        }
      })
    } else {
      const newPlant = { 'user_id': 1, 'plant_id': this.currPlant.plant_id, 'ownname': this.myGroup.get('ownName')?.value, 'startdate': this.myGroup.get('startDate')?.value }
      this._plantService.addPlantToUser(newPlant).subscribe((result) => {
        if (result.affectedRows == 1) {
          console.log('erfolgreich hinzugefügt');
        } else {
          console.log('Fehler');
        }
      });
    }
    this.setEditMode(false);
    this._router.navigate(['/meine-pflanzen']);
  }

  public setEditMode(status: boolean) {
    this.editMode = status;
  }

}
