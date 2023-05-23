import { Injectable } from "@angular/core";
import {movie} from "../../_core/models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  favorites: movie[] = [];

  getFavorites() {
    const favorites = localStorage.getItem('favorites');
    if (favorites !== undefined && favorites !== null) {
      const movies: movie[] = JSON.parse(favorites);
      return movies;
    }
    return null;
  }

  clear() {
    localStorage.clear();
  }

}
