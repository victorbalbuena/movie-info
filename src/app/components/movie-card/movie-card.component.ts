import {Component, Input, OnInit} from '@angular/core';
import {movie} from "../../../_core/models/movie.model";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
  moviesData?: movie;

  constructor() { }

  ngOnInit(): void {
    console.log(this.moviesData);
    if (this.moviesData?.Poster === 'N/A') {
      console.log('here');
    }
  }

}
