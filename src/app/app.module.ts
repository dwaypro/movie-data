import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesService } from './movies.service';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MockMoviesService} from './mock-movies.service';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [ MoviesService, MockMoviesService, MoviesComponent, NgbModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
