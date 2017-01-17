import { Routes } from "@angular/router";

import {Animation1Component} from "./animation1/animation1.component";
import {Animation2Component} from "./animation2/animation2.component";

export const routes: Routes = [

  { path: 'animation1', component: Animation1Component },
  { path: 'animation2', component: Animation2Component },


  { path: '', redirectTo: 'animation1', pathMatch: 'full'},
  { path: '**', redirectTo: 'animation1', pathMatch: 'full' }
];

