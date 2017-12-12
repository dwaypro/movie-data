import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';


const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable()
export class SourceService {

	private sourceUrl = `https://www.netflix.com/search?q=Family%Guy`;


  constructor(
  	private http: HttpClient,
  ) { }


  requestSource(): Observable<any>  {
  	return this.http.get(this.sourceUrl)
  }

}
