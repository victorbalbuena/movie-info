import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubSink} from "subsink";
import {ConnectionApiService} from "../../services/connection-api.service";
import {movie} from "../../../_core/models/movie.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  movie?: movie;
  id: string = '';

  private subSink = new SubSink();

  constructor(
    private movieDataHttp: ConnectionApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.getMovieData();
  }

  getMovieData() {
    this.subSink.add(
      this.movieDataHttp.getMovieById(this.id)
        .subscribe((data) => {
          this.movie = data;
        })
    );
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
