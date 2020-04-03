import { TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';
import {HttpClientModule} from '@angular/common/http';


describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientModule],
      providers: [MovieService] })
      service = TestBed.get(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Movies', async () => {
    let result = await service.getMovies('abc');
    expect(typeof result).toBe(typeof []);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return Too Many Results', async () => {
    let result = await service.getMovies('a').catch( e => e);
    expect(result.message).toBe('Too many results.')
  });

});
