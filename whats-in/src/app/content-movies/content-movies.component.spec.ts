import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMoviesComponent } from './content-movies.component';

describe('ContentMoviesComponent', () => {
  let component: ContentMoviesComponent;
  let fixture: ComponentFixture<ContentMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
