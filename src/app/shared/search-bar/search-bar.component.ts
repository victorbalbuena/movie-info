import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ConnectionApiService } from "../../services/connection-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SubSink} from "subsink";
import {movie} from "../../../_core/models/movie.model";
import {result} from "../../../_core/models/result.model";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [
    ConnectionApiService
  ]
})

export class SearchBarComponent implements OnInit {

  @ViewChild('search') search!: ElementRef;

  movies: movie[] | undefined = [];

  private subSink = new SubSink();

  constructor( private movieDataHttp: ConnectionApiService,
               private router: Router,
               private route: ActivatedRoute,
               private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
  }

  getMovieList(name: any) {
    this.subSink.add(
      this.movieDataHttp.getMovieByName(name.target.value)
        .subscribe((data: result) => {
          console.log(data);
          this.movies = data.Search;
        })
    );
  }

  redirectTo(id: string = '') {
    this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
      this.router.navigate([`/movie/show/${id}`]);
    });
    this.movies = [];
  }

}
