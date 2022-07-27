import { Component, Input, OnInit } from '@angular/core';
import { Plant } from 'src/app/shared/models/plant';

@Component({
  selector: 'app-plant-header',
  templateUrl: './plant-header.component.html',
  styleUrls: ['./plant-header.component.scss']
})
export class PlantHeaderComponent implements OnInit {
  @Input() currPlant?: Plant;

  constructor() { }

  ngOnInit(): void {
  }

}
