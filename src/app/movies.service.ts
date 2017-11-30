import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Poster } from './poster';
import {Observable} from 'rxjs/Observable';

import { environment } from '../../environments/environment'


const httpOptions ={
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable()
export class MoviesService {

  private moviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=a9a1847f7070d385d8a56c91a000e283&language=en-US&page=1';

  constructor(
  	private http: HttpClient,
  ) { }

  requestMovies() {
  	return this.http.get(this.moviesUrl)
  }

}
