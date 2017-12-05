import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { Term } from '../term';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],

})

export class MoviesComponent implements OnInit {
  closeResult: string;
  posters = [];

  term: Term = {
    input: '',
    output: '',
  }

  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal
  	) {}

  ngOnInit() {
    this.reqMovies();
  }

  reqDetails(){
    console.log("hello world!");
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  reqMovies() {
    this.moviesService.requestMovies().subscribe(data => this.posters = data.results);
  }

  searchMovies(): void {
    var url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&query=${this.term.input}&language=en-US&page=1`;

    this.moviesService.searchMovies(url)
    .subscribe(data => this.posters = data.results);
  }

}

