import { TestBed, inject } from '@angular/core/testing';

import { MockMoviesService } from './mock-movies.service';

describe('MockMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockMoviesService]
    });
  });

  it('should be created', inject([MockMoviesService], (service: MockMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
