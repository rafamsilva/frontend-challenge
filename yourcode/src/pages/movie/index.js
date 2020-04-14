import React from 'react';
import { ReactComponent as BackIcon } from '../../assets/images/icon-arrow-white.svg';
import { ReactComponent as ImdbLogo } from '../../assets/images/logo-imdb.svg';
import { ReactComponent as CotationLogo } from '../../assets/images/icon-cotation.svg';

import Wrapper from '../../components/wrapper';
import FullMovieCover from '../../components/full-movie-cover/';
import Badge from '../../components/badge/';
import Blockquote from '../../components/blockquote/';
import FavoriteButton from '../../components/favorite-button/';

import HeaderContainer from '../../containers/header';

import { Main, BackButton, MovieDetails, Plot, SecondaryInfo, Badges, MovieTitle, Metadata } from './style';

export default function MoviePage() {
  return (
    <Wrapper>
      <HeaderContainer showSearchBar={false} />

      <BackButton to="/">
        <BackIcon alt="Go back" title="Go back" />
      </BackButton>

      <Main>
        <MovieDetails>
          <Metadata>
            86 min · 2014 · <strong>R</strong>
          </Metadata>

          <MovieTitle>What We Do in the Shadows</MovieTitle>

          <Badges>
            <Badge color="#FF9F1C" icon={<ImdbLogo alt="IMDB Logo" title="IMDB Logo" />} value="7.6/10" />

            <Badge color="#FF4040" icon={<CotationLogo alt="Cotation Logo" title="Cotation Logo" />} value="96%" />

            <FavoriteButton />
          </Badges>

          <Plot>
            <Blockquote
              title="Plot"
              text="Viago, Deacon, and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming flatmate conflicts."
            />
          </Plot>

          <SecondaryInfo>
            <Blockquote title="Cast" list={['Jemaine Clement', 'Cori Gonzalez-Macuer', 'Taika Waititi', 'Jonny Brugh']} />

            <Blockquote title="Genre" list={['Comedy', 'Horror']} />

            <Blockquote title="Director" list={['Jemaine Clement', 'Taika Waititi']} />
          </SecondaryInfo>
        </MovieDetails>

        <FullMovieCover image="https://www.fillmurray.com/800/800" alt="" title="" />
      </Main>
    </Wrapper>
  );
}
