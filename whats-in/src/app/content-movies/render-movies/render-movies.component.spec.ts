import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderMoviesComponent } from './render-movies.component';

describe('RenderMoviesComponent', () => {
  let component: RenderMoviesComponent;
  let fixture: ComponentFixture<RenderMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
