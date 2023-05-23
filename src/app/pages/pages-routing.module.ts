import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MovieComponent} from "./movie/movie.component";
import {FavoritesComponent} from "./favorites/favorites.component";

const routes: Routes = [
  {
    path: 'movie',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'show/:id', component:  MovieComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
