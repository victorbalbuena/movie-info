import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import {DefaultDataService} from "../services/default-data.service";
import { MovieComponent } from './movie/movie.component';
import {SpinnerModule} from "../shared/spinner/spinner.module";
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    MovieComponent,
    FavoritesComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    MovieComponent,
    FavoritesComponent
  ],
    imports: [CommonModule, SharedModule, RouterModule, ComponentsModule, SpinnerModule],
  providers: [ DefaultDataService ]
})
export class PagesModule { }
