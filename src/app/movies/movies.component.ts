import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MockMoviesService } from '../mock-movies.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: Movie[];
  
  constructor(
    private mockMoviesService: MockMoviesService,
  	) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void{
    this.movies = this.mockMoviesService.getMovies();
  }

}
