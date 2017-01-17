import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Animation1Component } from './animation1/animation1.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { Animation2Component } from './animation2/animation2.component';

@NgModule({
  declarations: [
    AppComponent,
    Animation1Component,
    Animation2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
