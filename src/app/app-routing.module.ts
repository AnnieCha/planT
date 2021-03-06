import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantInfoComponent } from './components/plant-info/plant-info.component';
import { PlantlistComponent } from './components/plantlist/plantlist.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { InfotextComponent } from './components/infotext/infotext.component';
import { LoginComponent } from './components/login/login.component';
import { CareAccordionComponent } from './components/care-accordion/care-accordion.component';

const routes: Routes = [
  {
    path: 'plant/:name', component: PlantInfoComponent, children: [
      { path: '', component: InfotextComponent, outlet: "right-side" },
      { path: 'add-plant', component: AddPlantComponent, outlet: "right-side" },
    ]
  },
  //todo: nicht schön gelöst
  { path: 'mein-kalender', component: CareAccordionComponent},
  { path: ':area', component: PlantlistComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
