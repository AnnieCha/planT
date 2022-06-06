import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantrow',
  templateUrl: './plantrow.component.html',
  styleUrls: ['./plantrow.component.scss']
})
export class PlantrowComponent implements OnInit {
  name = "Duftgeranie";
  infotext = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
  // this will change between my_plants and all_plants -> needs setter-method + maybe enums?
  site = "my_plants";

  constructor() { }

  ngOnInit(): void {
  }

}
