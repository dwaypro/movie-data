import { Component, OnInit, Input } from '@angular/core';
import { MockMoviesService } from '../mock-movies.service';
import { MoviesService } from '../movies.service';
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})

export class MoviesComponent implements OnInit {

  posters = [];

  term: Term = {
    input: '',
    output: '',
  }

  constructor(
    private moviesService: MoviesService,
  	) {}

  ngOnInit() {
    this.reqMovies();
  }

  reqMovies() {
    this.moviesService.requestMovies().subscribe(data => this.posters = data.results);
  }

  searchParam(){
  }

  searchMovies(){
    var url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&query=${this.term.input}&language=en-US&page=1`;
    this.moviesService.searchMovies(url)
    .subscribe(data => {
      this.posters = data.results);
    }
  }


}
