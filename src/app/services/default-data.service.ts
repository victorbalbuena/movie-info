import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movie } from 'src/_core/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DefaultDataService {

  constructor(private http: HttpClient) { }

  public getDefaultData(): Observable<movie[]> {
    return this.http.get<movie[]>('assets/data.json');
  }
}
