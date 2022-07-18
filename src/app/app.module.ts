import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantlistComponent } from './components/plantlist/plantlist.component';
import { PlantInfoComponent } from './components/plant-info/plant-info.component';

import { MaterialModule } from './material/material.module';
import { CareInstructionComponent } from './components/care-instruction/care-instruction.component';
import { CareEventsComponent } from './components/care-events/care-events.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { InfotextComponent } from './components/infotext/infotext.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantDetailComponent,
    PlantlistComponent,
    CareInstructionComponent,
    CareEventsComponent,
    PlantInfoComponent,
    DarkmodeComponent,
    AddPlantComponent,
    InfotextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
