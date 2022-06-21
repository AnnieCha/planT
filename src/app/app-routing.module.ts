import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantInfoComponent } from './components/plant-info/plant-info.component';
import { PlantlistComponent } from './components/plantlist/plantlist.component';

const routes: Routes = [
  { path: 'plant/:name', component: PlantInfoComponent },
  { path: '', component: PlantlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
