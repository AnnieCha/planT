import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OpenPlantService } from 'src/app/services/openPlant.service';
import { PlantService } from 'src/app/services/plant.service';
import { PlantListService } from 'src/app/services/plantList.service';
import { UserService } from 'src/app/services/user.service';
import { Plant } from '../../shared/models/plant';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})

export class PlantDetailComponent implements OnInit {
  @Input() plant!: Plant;
  @Output() plantDeleted = new EventEmitter<void>();

  // this will change between my_plants and all_plants -> needs setter-method or getting information by propsS + maybe enums?
  type: string = "all";
  nextWateringDay: string = "";
  weekdays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  imgPath = '../../../assets/img/';


  constructor(
    private _openPlantService: OpenPlantService,
    private _plantListService: PlantListService,
    private _plantService: PlantService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.type = this._plantListService.getListType();
    if (this.plant.nextWateringDay) {
      this.nextWateringDay = this.weekdays[new Date(this.plant.nextWateringDay).getDay()];
    }
    this.imgPath = this.imgPath + this.plant.plant_id + ".jpg";
  }

  public edit(name: string, ownName: string, startDate: Date) {
    this.openPlant(name, true, true);
    this._openPlantService.setCurrentValues(ownName, startDate);
  }

  public openPlant(name: string, editMode: boolean, updatePlantMode?: boolean) {
    this._openPlantService.setEditMode(editMode);
    this._openPlantService.setUpdatePlantMode(updatePlantMode ? updatePlantMode : false);
    this._router.navigate(['/plant', name]);
  }

  public delete(ownName: string) {
    this._plantService.deleteOwnPlant(this._userService.getCurrentUserId(), ownName).subscribe((result) => {
      this.plantDeleted.emit();
    })
  }
}
