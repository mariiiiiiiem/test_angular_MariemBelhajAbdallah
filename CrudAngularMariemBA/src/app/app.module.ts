import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponentComponent } from './residence-component/residence-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AppartementComponent } from './appartement/appartement.component';
import {HttpClientModule} from "@angular/common/http";
import { AddAppartComponent } from './add-appart/add-appart.component';
import { UpdateAppartementComponent } from './update-appartement/update-appartement.component';
import { ShowAppartComponent } from './show-appart/show-appart.component';
import {ShowroomComponent} from "./showroom/showroom.component";
import { AddShowroomComponent } from './add-showroom/add-showroom.component';
import { ShowShowroomComponent } from './show-showroom/show-showroom.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponentComponent,
    NavbarComponent,
    FormulaireComponent,
    HomeComponent,
    AppartementComponent,
    AddAppartComponent,
    UpdateAppartementComponent,
    ShowAppartComponent,
    ShowroomComponent,
    AddShowroomComponent,
    ShowShowroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
