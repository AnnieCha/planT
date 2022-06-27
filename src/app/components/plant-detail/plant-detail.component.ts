import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../../shared/models/plant';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})

export class PlantDetailComponent implements OnInit {
  @Input() plant?: Plant;
  @Input() index?: number;

  // this will change between my_plants and all_plants -> needs setter-method or getting information by propsS + maybe enums?
  site = "all_plants";
  //@Input() name!: string;
  //@Input() infotext!: string;

  ngOnInit(): void {
    
  }

  public edit(name: string) {
    console.log('edit', name);
    //open new side
  }
  
  public add(name: string) {
    console.log('add', name);
    //open new side
  }
  
  public like(name: string) {
    console.log('like');
    //http-post like plant
  }
}
