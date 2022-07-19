import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditPlantService } from 'src/app/services/editPlant.service';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/shared/models/plant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'stream';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';


@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})

export class AddPlantComponent implements OnInit {

  //das in den header
  @Output() btnClick = new EventEmitter()

  public currPlant?: Plant;
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
    ) {
      //bei check icon click diese funktion aufrufen
      this.btnClick.emit;
    }


  ngOnInit(): void {
 //   this.currPlant = this._plantService.getCurrenPlant();
    this.sub = this.route.params.subscribe(params => {
      this.plantName = params['name'];
    })
    this.getPlantInfo();
  }

  public getPlantInfo(){
    this.currPlant = this._plantService.getCurrenPlant(this.plantName);
  }

  ngOnChange() {
    console.log("change", this.ownName, this.startDate);
  }
}

