import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MockMoviesService} from './mock-movies.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ MoviesService, MockMoviesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
