import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantInfoComponent } from './components/plant-info/plant-info.component';
import { PlantlistComponent } from './components/plantlist/plantlist.component';
import { EditPlantComponent } from './components/edit-plant/edit-plant.component';
import { InfotextComponent } from './components/infotext/infotext.component';
import { LoginComponent } from './components/login/login.component';
import { CareAccordionComponent } from './components/care-accordion/care-accordion.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './services/authGuard.service';

const routes: Routes = [
  {
    path: 'plant/:name', component: PlantInfoComponent, canActivate: [AuthGuard]},
  { path: 'registration', component: RegistrationComponent},
  { path: 'mein-kalender', component: CareAccordionComponent, canActivate: [AuthGuard]},
  { path: ':area', component: PlantlistComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
