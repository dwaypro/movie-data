import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';


@Injectable()
export class MockMoviesService {

  constructor() { }

  getMovies(): Movie[] {
		return MOVIES;
	}

}
