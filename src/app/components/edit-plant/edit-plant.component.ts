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
  minDate = new Date();

  constructor( ) { }


  ngOnInit(): void {}
}