import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormulaireComponent} from "./formulaire/formulaire.component";
import {HomeComponent} from "./home/home.component";
import {ResidenceComponentComponent} from "./residence-component/residence-component.component";
import {AppartementComponent} from "./appartement/appartement.component";
import {AddAppartComponent} from "./add-appart/add-appart.component";
import {UpdateAppartementComponent} from "./update-appartement/update-appartement.component";
import {ShowAppartComponent} from "./show-appart/show-appart.component";
import {ShowroomComponent} from "./showroom/showroom.component";
import {AddShowroomComponent} from "./add-showroom/add-showroom.component";
import {ShowShowroomComponent} from "./show-showroom/show-showroom.component";

const ROUTES: Routes = [
  //{path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"Formulaire",component:FormulaireComponent},
  {path:"residence",component:ResidenceComponentComponent},
  {path:"apartment",component:AppartementComponent},
  {path:"addAppart",component:AddAppartComponent},
  {path:"update/:id",component:UpdateAppartementComponent},
   {path:"showAppart/:id",component:ShowAppartComponent},
  {path:"showroom",component:ShowroomComponent},
  {path:"addShowroom",component:AddShowroomComponent},
  {path:"showShowroom/:id",component:ShowShowroomComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
