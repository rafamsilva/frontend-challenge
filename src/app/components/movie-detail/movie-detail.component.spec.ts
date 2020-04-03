import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from 'src/app/services/movie.service';
import { RouterModule, ActivatedRoute } from '@angular/router';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      imports: [HttpClientModule, RouterModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => 'tt2015381' } } } },
        MovieService
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MovieDetailComponent);
      
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render movie", async (done) => { 
    spyOn(component, "createMovie").and.returnValue(Promise.resolve(true));
    await component.ngOnInit();
    expect(component.createMovie).toHaveBeenCalled();
    done();
  });
});

