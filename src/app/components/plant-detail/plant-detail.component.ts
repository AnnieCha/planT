import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../../modules/plant';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})

export class PlantDetailComponent implements OnInit {
  @Input() plant?: Plant;
  @Input() index?: number;

  name = "Duftgeranie";
  infotext = "Lorem ipsum dolor sit amet, consetetur sit amet consetetur. "
  // this will change between my_plants and all_plants -> needs setter-method or getting information by propsS + maybe enums?
  site = "my_plants";
  //@Input() name!: string;
  //@Input() infotext!: string;

  ngOnInit(): void {
    
  }
}
