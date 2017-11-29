import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Movie } from './movie';
import {Observable} from 'rxjs/Observable';


const httpOptions ={
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable()
export class MoviesService {

  private moviesUrl = 'http://www.omdbapi.com/?s=Bond&apikey=b58323bb';

  constructor(
  	private http: HttpClient,
  ) { }

  getMovies(): Observable<Movie> {
  	return this.http.get<Movie>(this.moviesUrl).map((res:response) => res.json());
  }

}
