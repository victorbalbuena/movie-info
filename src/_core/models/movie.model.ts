import {rating} from "./rating.model";

export class movie {
  Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
  Poster?: string;

  Actors?: string;
  Awards?: string;
  BoxOffice?: string;
  Country?: string;
  DVD?: string;
  Director?: string;
  Genre?: string;
  Language?: string;
  Metascore?: string;
  Plot?: string;
  Production?: string;
  Rated?: string;
  Ratings?: rating[];
  Released?: string;
  Response?: string;
  Runtime?: string;
  Website?: string;
  Writer?: string;
  imdbRating?: string;
  imdbVotes?: string;
}
