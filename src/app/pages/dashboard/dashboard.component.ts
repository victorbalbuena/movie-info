import { Component, OnInit } from '@angular/core';
import {SubSink} from "subsink";
import {DefaultDataService} from "../../services/default-data.service";
import {movie} from "../../../_core/models/movie.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: movie[] = [];

  private subSink = new SubSink();

  constructor(private defaultHttp: DefaultDataService) { }

  ngOnInit(): void {
    this.getDefaultData();
  }

  getDefaultData() {
    this.subSink.add(
      this.defaultHttp.getDefaultData()
        .subscribe((data) => {
          this.movies = data;
        })
    );
  }

}
