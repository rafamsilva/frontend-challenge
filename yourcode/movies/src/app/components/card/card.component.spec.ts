import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.movie = {
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
      favourite: true
    };

    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
