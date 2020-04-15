export const MoviesUtil = {
  formatAndReturnOnePiece: (rated, char, position) => {
    const pieces = rated.split(char);

    return pieces[position === 'last' ? pieces.length - 1 : position];
  },

  formatFields: (movie) => {
    return Object.assign({}, movie, {
      Released: movie.Released ? MoviesUtil.formatAndReturnOnePiece(movie.Released, ' ', 'last') : undefined,
      Rated: movie.Rated ? MoviesUtil.formatAndReturnOnePiece(movie.Rated, '-', 'last') : undefined,
      Actors: movie.Actors ? movie.Actors.split(',') : undefined,
      Genre: movie.Genre ? movie.Genre.split(',') : undefined,
      Director: movie.Director ? movie.Director.split(',') : undefined,
    });
  },

  convertNAFieldToUndefined: (movie) => {
    const formatted = {};

    for (let key in movie) {
      formatted[key] = movie[key] === 'N/A' ? undefined : movie[key];
    }

    return formatted;
  },
};
