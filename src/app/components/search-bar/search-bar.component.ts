import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { PlantService } from 'src/app/services/plant.service';
//used code example from angular material autocomplete: https://material.angular.io/components/autocomplete/examples

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  filter = new FormControl('');
  plantNames: string[] = [];
  filteredPlants$!: Observable<string[]>;

  constructor(private _plantService: PlantService) { }

  ngOnInit(): void {
    this._plantService.getPlantNamesFromDb().subscribe(result => {
      console.log('result plantnames', result);
      this.plantNames = result.map(function (nameObject) {
        return nameObject['name'];
      });
    });

    this.filteredPlants$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(this.plantNames.filter(option => option.toLowerCase().includes(filterValue)));
    return this.plantNames.filter(option => option.toLowerCase().includes(filterValue));
  }

}
