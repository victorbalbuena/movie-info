import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {movie} from "../../_core/models/movie.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  getMovieByName(name: string) {
    return this.http.get(
      `${environment.OMDbAPI}/?s=${name}&apikey=${environment.OMDbKEY}`
    );
  }

  getMovieById(id: string) {
    return this.http.get<movie>(
      `${environment.OMDbAPI}/?i=${id}&apikey=${environment.OMDbKEY}`
    );
  }

}
