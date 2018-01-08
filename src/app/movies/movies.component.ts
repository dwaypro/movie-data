import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SourceService } from '../source.service';
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { Term } from '../term';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],

})

export class MoviesComponent implements OnInit, OnChanges {
 
  
  closeResult: string;
  posters = [];
  sources = [];

  term: Term = {
    input: '',
    output: '',
  }

  constructor(
    public moviesService: MoviesService,
    private modalService: NgbModal,
    private movieSource: SourceService,
  	) {}

  ngOnInit() {
    this.reqMovies();
    this.validSize();
    this.moviesSwitch();
  }

  ngOnChanges(changes: SimpleChanges){

  }

  reqDetails(){

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

  moviesSwitch(){
    this.moviesService.requestNowPlaying().subscribe(data => this.posters = data.results);
  }

  movSource() {
    this.movieSource.requestSource().subscribe(data => this.sources = data.results);

    console.log(this.sources);
    
  }

  validSize(){
    var viewportWidth = document.documentElement.clientWidth;
    if(viewportWidth < 680){
      return true;
    }else{
      return false
    }
  }


  viewMovie(){
    var displayBox = document.getElementById('dbox');

    if (displayBox.style.display=='none' || displayBox.style.display==''){
      displayBox.style.display='block';
    }else{
      displayBox.style.display='none';
    }

  }

  searchMovies(): void {
    var url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&query=${this.term.input}&language=en-US&page=1`;

    this.moviesService.searchMovies(url)
    .subscribe(data => this.posters = data.results);
  }

}

