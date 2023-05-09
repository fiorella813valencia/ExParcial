import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../public/home/home.component";
import {ParticipantsComponent} from "../participant/participants/participants.component";
import {TableParticipantsComponent} from "../participant/table-participants/table-participants.component";
import {PageNotFoundComponent} from "../public/page-not-found/page-not-found.component";

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'marathon/records', component:TableParticipantsComponent },
  {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
