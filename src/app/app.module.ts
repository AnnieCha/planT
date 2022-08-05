import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


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
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CareAccordionComponent } from './components/care-accordion/care-accordion.component';
import { LoginComponent } from './components/login/login.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

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
    InfotextComponent,
    SearchbarComponent,
    CareAccordionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MaterialModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
