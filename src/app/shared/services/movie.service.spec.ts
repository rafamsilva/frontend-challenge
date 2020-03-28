import { TestBed } from "@angular/core/testing";
import { MovieService } from "./movies.service";
import { Movie } from "../models/movie.model";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("MovieService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    })
  );

  it("should be created", () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it("01 - JsonDataToMovie", () => {
    const service: MovieService = TestBed.get(MovieService);
    let tempJsonData = {
      Title: "",
      Year: "",
      imdbID: "",
      Type: "",
      Poster: ""
    };
    let serviceReturn: Movie = service.jsonDataToMovie(tempJsonData);
    expect(serviceReturn instanceof Object).toBeTruthy();
  });

  it("02 - JsonDataToMovies", () => {
    const service: MovieService = TestBed.get(MovieService);
    const tempJsonData = [
      {
        Title: "Title",
        Year: "Year",
        imdbID: "imdbID",
        Type: "Type",
        Poster: "Poster"
      },
      {
        Title: "Title2",
        Year: "Year2",
        imdbID: "imdbID2",
        Type: "Type2",
        Poster: "Poster2"
      }
    ];
    const serviceReturn: Movie[] = service.jsonDataToMovies({
      Search: tempJsonData
    });
    expect(serviceReturn.length).toBe(tempJsonData.length);
  });
});
