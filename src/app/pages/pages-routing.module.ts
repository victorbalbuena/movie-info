import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MovieComponent} from "./movie/movie.component";

const routes: Routes = [
  {
    path: 'movie',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: ':id', component:  MovieComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
