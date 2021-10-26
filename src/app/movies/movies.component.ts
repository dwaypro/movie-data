import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SourceService } from '../source.service';
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
  sources = [];

  term: Term = {
    input: '',
    output: '',
  }

  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal,
    private movieSource: SourceService,
  	) {}

  ngOnInit() {
    this.reqMovies();
    this.validSize();
  window.addEventListener('scroll', function(){
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
    }
  });
  
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
    console.log('this.term.input', this.term.input);
    if(this.term.input.length){
      var url = `https://api.themoviedb.org/3/search/movie?api_key=a9a1847f7070d385d8a56c91a000e283&query=${this.term.input}&language=en-US&page=1`;
      this.moviesService.searchMovies(url)
      .subscribe(data => this.posters = data.results);
    }else{
      this.reqMovies();
    }

  }


}

