import { Rating } from './rating';

export class Movie {
    Title: string;
    Year: string;
    Rated: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Poster: string;
    Ratings: [Rating];
    MetaScore: string;
    imdbRating: string;
    imdbID: string;
}
