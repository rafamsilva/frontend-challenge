import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MoviesDetailComponent } from "./movies-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "src/app/shared/shared.module";
import {
  ActivatedRoute,
  RouterModule,
  convertToParamMap,
  Router
} from "@angular/router";
import { MovieService } from "src/app/shared/services/movies.service";
import { of, throwError } from "rxjs";
import { Movie } from "src/app/shared/models/movie.model";

describe("MoviesDetailComponent", () => {
  let component: MoviesDetailComponent;
  let fixture: ComponentFixture<MoviesDetailComponent>;
  const movieStub: Movie = new Movie("", "", "", "", "");
  const router = {
    navigate: jasmine.createSpy("navigate")
  };
  const errorString = "error";
  const OBSERVABLE_ERROR = throwError(new Error(errorString));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesDetailComponent],
      imports: [RouterModule.forRoot([]), HttpClientModule, SharedModule],
      providers: [
        MovieService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ imdb: jasmine.any(String) }))
          }
        },
        {
          provide: Router,
          useValue: router
        }
      ]
    }).compileComponents();
  }));

  function setup() {
    const movieService = fixture.debugElement.injector.get(MovieService);

    return { movieService };
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("001 - should create", () => {
    expect(component).toBeTruthy();
  });

  it("002 - should ngOnInit", () => {
    spyOn(component, "loadMovie");
    component.ngOnInit();
    expect(component.loadMovie).toHaveBeenCalled();
  });

  it("003 - should loadMovie - Success", () => {
    const { movieService } = setup();
    spyOn(movieService, "getMovie").and.returnValue(of(movieStub));
    component.loadMovie();
    expect(component.movie).toBe(movieStub);
  });

  it("003 - should loadMovie - Success", () => {
    const { movieService } = setup();
    spyOn(movieService, "getMovie").and.returnValue(of(movieStub));
    component.loadMovie();
    expect(component.movie).toBe(movieStub);
  });

  it("004 - should loadMovie - Error", () => {
    const { movieService } = setup();
    spyOn(movieService, "getMovie").and.returnValue(OBSERVABLE_ERROR);
    spyOn(window, "alert");
    component.loadMovie();
    expect(window.alert).toHaveBeenCalled();
  });

  it("005 - should saveFavorite", () => {
    component.isFavorite = false;
    spyOn(localStorage.__proto__, "setItem");
    const imdbId = jasmine.any(String);
    component.saveFavorite({ imdbID: imdbId });
    expect(component.isFavorite).toBeTruthy();
    expect(localStorage.__proto__.setItem).toHaveBeenCalledWith(imdbId, "true");
  });

  it("006 - should removeFavorite", () => {
    spyOn(localStorage.__proto__, "removeItem");
    component.isFavorite = true;
    const imdbId = jasmine.any(String);
    component.removeFavorite({ imdbID: imdbId });
    expect(localStorage.__proto__.removeItem).toHaveBeenCalledWith(imdbId);
  });

  it("007 - should removeFavorite", () => {
    const imdbId = jasmine.any(String);
    const dumbObj = { param: 1 };
    const strJson = JSON.stringify(dumbObj);
    component.isFavorite = true;
    spyOn(localStorage.__proto__, "getItem").and.returnValue(strJson);
    component.validFavorite({ imdbId: imdbId });
    expect(component.isFavorite["param"]).toBe(dumbObj["param"]);
  });

  it("008 - should removeFavorite", () => {
    const imdbId = jasmine.any(String);
    const strJson = null;
    component.isFavorite = true;
    spyOn(localStorage.__proto__, "getItem").and.returnValue(strJson);
    component.validFavorite({ imdbId: imdbId });
    expect(component.isFavorite).toBeFalsy();
  });
});
