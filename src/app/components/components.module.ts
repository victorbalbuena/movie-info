import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
    exports: [
        MovieCardComponent,
    ],
})
export class ComponentsModule { }
