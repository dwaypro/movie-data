import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesService } from './movies.service';
import { SourceService } from './source.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { BlogComponent } from './blog/blog.component';



const routes: Routes =[
  
  { path: 'about',    component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'recognition', component: RecognitionComponent },
  { path: 'blog', component: BlogComponent },

  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    RecognitionComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
    routes,
    { enableTracing: true}
    ),
  ],
  providers: [ MoviesService, MoviesComponent, NgbModule, SourceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
