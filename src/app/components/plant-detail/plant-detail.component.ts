import { Component, OnInit, Input } from '@angular/core';
import { OpenPlantService } from 'src/app/services/openPlant.service';
import { PlantService } from 'src/app/services/plant.service';
import { PlantListService } from 'src/app/services/plantList.service';
import { Plant } from '../../shared/models/plant';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})

export class PlantDetailComponent implements OnInit {
  @Input() plant!: Plant;

  // this will change between my_plants and all_plants -> needs setter-method or getting information by propsS + maybe enums?
  type: string = "all";
  nextWateringDay: string = "";
  weekdays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];


  constructor(
    private _openPlantService: OpenPlantService,
    private _plantListService: PlantListService,
    private _plantService: PlantService,
    ) {}

  ngOnInit(): void {
    this.type = this._plantListService.getListType();
    if(this.plant.nextWateringDay){
      this.nextWateringDay = this.weekdays[new Date(this.plant.nextWateringDay).getDay()];
    }
  }

  public edit(name: string) {
    console.log('edit', name);
    //open new side
  }
  
  public add(name: string, editMode: boolean) {
    this._openPlantService.setEditMode(editMode);
    this._openPlantService.setSelectedPlant(name);
    //open new side
  }

  public delete(user_id: number, ownName: string){
    console.log('delete plant');
    this._plantService.deleteOwnPlant(user_id, ownName).subscribe((result) => {
      console.log('plant deleted', result);
    })
  }
}
