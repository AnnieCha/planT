import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpenPlantService } from 'src/app/services/openPlant.service';
import { PlantService } from 'src/app/services/plant.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/shared/models/plant';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

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
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
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
    if (this._updatePlantMode) {
      this.myGroup.patchValue({
        ownName: this._openPlantService.getOwnName(),
        startDate: this._openPlantService.getStartDate()
      })
    }
  }

  public onFormSubmit(): void {
    if (this._updatePlantMode) {
      const updatedPlant = { 'user_id': 1, 'plant_id': this.currPlant.plant_id, 'ownName': this.myGroup.get('ownName')?.value, 'startDate': this.myGroup.get('startDate')?.value, 'plantName': this._openPlantService.getOwnName() }
      this._plantService.updatePlantFromUser(updatedPlant).subscribe(result => {
        if (result.affectedRows == 1) {
          this.onSuccess();
        } else {
          if (result.errno == 1062) this.openDialog('DUPLICATE_ENTRY', 1);
          console.log('Fehler');
        }
      })
    } else {
      const newPlant = { 'user_id': 1, 'plant_id': this.currPlant.plant_id, 'ownname': this.myGroup.get('ownName')?.value, 'startdate': this.myGroup.get('startDate')?.value }
      this._plantService.addPlantToUser(newPlant).subscribe(result => {
        if (result.affectedRows == 1) {
          this.onSuccess();
        } else {
          if (result.errno == 1062) {
            this.openDialog('DUPLICATE_ENTRY', 1)
          } else {
            console.log('Fehler');
          }
        }
      })
    }
  }

  openDialog(type: string, buttonNo: number): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        type: type,
        buttonNo: buttonNo
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (type == 'CANCEL') {
        if (result == 'cancel') {
          this.editMode = false;
          if (this._updatePlantMode) {
            this._router.navigate(['/meine-pflanzen']);
          }
        }
      }
    })
  }

  public onSuccess(): void {
    this._router.navigate(['/meine-pflanzen']);
    this.editMode = false;
    let message = this._updatePlantMode ? " erfolgreich geändert" : " erfolgreich hinzugefügt";
    this._snackBar.open(this.currPlant.name + ' (' + this.myGroup.get('ownName')?.value + ') ' + message, 'Ok', {
      duration: 2000
    });
  }

  public setEditMode(status: boolean): void {
    this.editMode = status;
  }
}