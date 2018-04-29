import {MatSelect} from '@angular/material/select/typings';
import { RouterModule,Routes} from '@angular/router';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatToolbarModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatIconModule, MatRadioGroup, MatCheckbox } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindDeliveryServiceComponent } from './find-delivery-service/find-delivery-service.component';
import { TrackYourParcelComponent } from './track-your-parcel/track-your-parcel.component';

const appRoutes: Routes =[
  {path:'find-delivery-service', component: FindDeliveryServiceComponent},
  {path: 'track-your-parcel', component: TrackYourParcelComponent},
  {path: '', redirectTo:'/find-delivery-service', pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    FindDeliveryServiceComponent,
    TrackYourParcelComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
