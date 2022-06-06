import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantrowComponent } from './components/plantrow/plantrow.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
