import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { MoviesService } from "./movies.service";

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("#search movies", () => {
    const movies = [
      {
        Title: "Vinicius",
        Year: "2005",
        imdbID: "tt0493175",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTI3NDEwODEwMV5BMl5BanBnXkFtZTcwNTQyODUzMQ@@._V1_SX300.jpg",
      },
    ];

    const params = {
      s: "Vinicius",
      type: "movie",
    };

    service.search(params).subscribe((res) => {
      expect(res.totalResults).toBe("1");
      expect(res.Search).toEqual(movies);
    });

    const request = httpMock.expectOne(
      `${service.API_URL}&s=Vinicius&type=movie`
    );
    expect(request.request.method).toEqual("GET");

    request.flush({
      Response: "True",
      Search: movies,
      totalResults: "1",
    });
  });

  it("#findId movie", () => {
    const movie = {
      Title: 'Vinicius',
      Year: '2005',
      Rated: 'N/A',
      Released: '11 Nov 2005',
      Runtime: '121 min',
      Genre: 'Documentary, Biography, Music',
      Director: 'Miguel Faria Jr.',
      Writer:
        'Rubem Braga (excerpt), Miguel Faria Jr., Eucanaã Ferraz, Eucanãa Ferraz, Diana Vasconcellos',
      Actors: 'Maria Bethânia, Ricardo Blat, M.S. Bom, Renato Braz',
      Plot:
        'Documentary about Brazilian songwriter and poet Vinicius de Moraes, showing his life, work, family, friends, and love-affairs.',
      Language: 'Portuguese',
      Country: 'Spain, Brazil',
      Awards: '5 wins & 4 nominations.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTI3NDEwODEwMV5BMl5BanBnXkFtZTcwNTQyODUzMQ@@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '7.9/10' }],
      Metascore: 'N/A',
      imdbRating: '7.9',
      imdbVotes: '408',
      imdbID: 'tt0493175',
      Type: 'movie',
      DVD: 'N/A',
      BoxOffice: 'N/A',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    };

    const params = {
      i: 'tt0493175',
      plot: 'full',
    };

    service.findId(params).subscribe((res) => {
      expect(res).toEqual(movie);
    });

    const request = httpMock.expectOne(`${service.API_URL}&i=tt0493175&plot=full`);
    expect(request.request.method).toEqual('GET');

    request.flush(movie);
  });
});
