import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { ConnectionApiService } from '../../services/connection-api.service';
import { movie } from '../../../_core/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { catchError, map, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {NotificationsService} from "../../services/notifications.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit, OnDestroy {
  isAFavorite?: boolean;

  favorites?: movie[] | null = [];
  movie?: movie;
  id: string = '';

  private subSink = new SubSink();

  constructor(
    private movieDataHttp: ConnectionApiService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorageService,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.getMovieData();

    this.favorites = this.storage.getFavorites();
  }

  getMovieData() {
    this.subSink.add(
      this.movieDataHttp
        .getMovieById(this.id)
        .pipe(
          map((data) => {
            this.movie = data;
            // @ts-ignore
            if (data.Error) {
              this.router.navigate(['/']);
            }
            this.checkFavorite();
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  checkFavorite() {
    if (
      this.favorites?.some((obj) =>
        obj.imdbID?.includes(<string>this.movie?.imdbID)
      )
    ) {
      this.isAFavorite = true;
    }
  }

  addFavorite() {
    if (this.movie) {
      this.favorites?.push(this.movie);
    }
    let updateArrayString = JSON.stringify(this.favorites);
    localStorage.setItem('favorites', updateArrayString);
    this.isAFavorite = true;
    this.notificationsService.showSuccess("Success", "Show was added to favorites!");
  }

  removeFavorite() {
    const position = this.favorites?.findIndex(
      (e) => e.imdbID === this.movie?.imdbID
    );
    // @ts-ignores
    this.favorites?.splice(position, 1);
    let updateArrayString = JSON.stringify(this.favorites);
    localStorage.setItem('favorites', updateArrayString);
    this.isAFavorite = false;
    this.notificationsService.showSuccess("Success", "Show was delete from favorites!");
  }
}
