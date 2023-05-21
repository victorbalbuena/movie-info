import {movie} from "./movie.model";

export class result {
  Error?: string;
  Response?: string;
  Search?: movie[];
  totalResults?: number;
}
