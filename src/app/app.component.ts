import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "./services/local-storage.service";
import {movie} from "../_core/models/movie.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'movieInfo';

  favorites = [];

  constructor(
    private storage: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    if (!this.storage.getFavorites()) {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }
}
