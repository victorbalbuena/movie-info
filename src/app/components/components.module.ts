import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { CardMovieListComponent } from './card-movie-list/card-movie-list.component';
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    MovieCardComponent,
    CardMovieListComponent,
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
