import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { OpenPlantService } from 'src/app/services/openPlant.service';
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

  constructor(private _plantService: PlantService, private _openPlantService: OpenPlantService, private _router: Router) { }

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
    console.log('filter value: ', value);
    const filterValue = value.toLowerCase();
    return this.plantNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  openPlant(name: string): void {
    console.log('open plant: ', name)
    this._openPlantService.setEditMode(false);
    this._openPlantService.setUpdatePlantMode(false);
    this._router.navigate(['/plant', name]);
    this.filter.setValue('');
  }

}
