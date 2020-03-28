import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MoviesContentComponent } from "./movies-content.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { MovieService } from "src/app/shared/services/movies.service";
import { Movie } from "src/app/shared/models/movie.model";
import { SharedModule } from "src/app/shared/shared.module";
import { CoreModule } from "src/app/core/core.module";
import { of } from "rxjs";

describe("MoviesContentComponent", () => {
  let component: MoviesContentComponent;
  let fixture: ComponentFixture<MoviesContentComponent>;
  const moviesMock: Movie[] = [
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesContentComponent, MoviesListComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
        SharedModule,
        CoreModule
      ],
      providers: [MovieService]
    }).compileComponents();
  }));

  function setup() {
    const movieService = fixture.debugElement.injector.get(MovieService);

    return { movieService };
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("01 - ngOnInit", () => {
    spyOn(component, "buildForm");
    component.ngOnInit();
    expect(component.buildForm).toHaveBeenCalled();
  });

  it("02 - shoul call search", () => {
    component.loading = true;
    component.alreadyRequest = false;
    const { movieService } = setup();
    spyOn(movieService, "getMovieByParam").and.returnValue(of(moviesMock));
    component.form.get("searchField").setValue("");
    component.search();
    expect(component.loading).toBeFalsy();
    expect(component.alreadyRequest).toBeTruthy();
    expect(component.movies.length).toBe(moviesMock.length);
  });

  it("03 - shoul call buildForm", () => {
    component.buildForm();
    expect(component.form.get("searchField").value).toBe("");
  });
});
