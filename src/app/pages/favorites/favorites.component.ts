import { Component, OnInit } from '@angular/core';
import {movie} from "../../../_core/models/movie.model";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(
    private storage: LocalStorageService
  ) { }

  favorites: movie[] | null = [];

  ngOnInit(): void {
    this.favorites = this.storage.getFavorites();
    console.log(this.favorites)
  }

}
