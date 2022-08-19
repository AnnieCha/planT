import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveComponentModule } from '@ngrx/component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantlistComponent } from './components/plantlist/plantlist.component';
import { PlantInfoComponent } from './components/plant-info/plant-info.component';

import { MaterialModule } from './material/material.module';
import { CareInstructionComponent } from './components/care-instruction/care-instruction.component';
import { CareEventsComponent } from './components/care-events/care-events.component';
import { EditPlantComponent } from './components/edit-plant/edit-plant.component';
import { InfotextComponent } from './components/infotext/infotext.component';
import { CareAccordionComponent } from './components/care-accordion/care-accordion.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { InfoComponent } from './components/info/info.component';

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
    EditPlantComponent,
    InfotextComponent,
    CareAccordionComponent,
    LoginComponent,
    RegistrationComponent,
    FormDialogComponent,
    HeaderComponent,
    SearchBarComponent,
    InfoComponent,
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
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
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
  providers: [MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
