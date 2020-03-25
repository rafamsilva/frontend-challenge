import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesContentComponent } from './movies-content.component';

describe('MoviesContentComponent', () => {
  let component: MoviesContentComponent;
  let fixture: ComponentFixture<MoviesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
