import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantInfoComponent } from './components/plant-info/plant-info.component';
import { PlantlistComponent } from './components/plantlist/plantlist.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { InfotextComponent } from './components/infotext/infotext.component';

const routes: Routes = [
  {
    path: 'plant/:name', component: PlantInfoComponent, children: [
      { path: '', component: InfotextComponent, outlet: "right-side" },
      { path: 'add-plant', component: AddPlantComponent, outlet: "right-side" },
    ]
  },
  { path: '', component: PlantlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
