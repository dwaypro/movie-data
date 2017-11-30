import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MockMoviesService } from '../mock-movies.service';
import { MoviesService } from '../movies.service';
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})

export class MoviesComponent implements OnInit {

  movies: Movie[]; 
  posters = {};

  constructor(
    private mockMoviesService: MockMoviesService,
    private moviesService: MoviesService,
  	) {}

  ngOnInit() {
    this.getMovies();
    this.reqMovies();
  }

  ngAfterViewInit(){
  
  }

  getMovies(): void{
    this.movies = this.mockMoviesService.getMovies();
  }

  reqMovies() {
    this.moviesService.requestMovies().subscribe(data => this.posters = data.results);
  }


}
