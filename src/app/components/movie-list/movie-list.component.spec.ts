import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from 'src/app/services/movie.service';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ],
      imports: [HttpClientModule],
      providers: [MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
