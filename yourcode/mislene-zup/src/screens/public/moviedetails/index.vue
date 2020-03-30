<template>
  <div class="container-page">
    <Header />
    <div class="container">
      <v-row>
        <v-col
          md="12"
        >
          <a href="/movies">
            <img
              src="@/assets/imgs/icon-arrow-grey.svg"
              alt="voltar"
            >
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          md="5"
        >
          <v-row>
            <v-col
              md="12"
            >
              <div class="info-time">
                <p>{{ movie.Runtime }} . {{ movie.Year }} . <span>{{ movie.Rated }}</span></p>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              md="12"
            >
              <div class="tit-movie">
                <h3> {{ movie.Title }} </h3>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              md="12"
            >
              <div class="box-info">
                <div class="box-element">
                  <p><span class="box-one">IMDb</span><span class="box-two">{{ movie.Ratings[0].Value }}</span></p>
                </div>

                <div class="box-element">
                  <p>
                    <span class="box-three">
                      <img
                        src="@/assets/imgs/logo-rotten-tomatoes.svg"
                        alt="like"
                      >
                    </span>
                    <span class="box-two">{{ movie.Ratings[1].Value }}</span>
                  </p>
                </div>

                <div class="box-element">
                  <a
                    class="btn-add"
                    href="#"
                  >
                    <img
                      src="@/assets/imgs/icon-heart-full.svg"
                      alt="add"
                    >
                    Added
                  </a>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              md="12"
            >
              <div class="plot">
                <h4>Plot</h4>
                <p> {{ movie.Plot }} </p>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              md="4"
              class="footer-info"
            >
              <h4>Cast</h4>
              <p> {{ movie.Actors }} </p>
            </v-col>
            <v-col
              md="4"
              class="footer-info"
            >
              <h4>Genre</h4>
              <p> {{ movie.Genre }} </p>
            </v-col>
            <v-col
              md="4"
              class="footer-info"
            >
              <h4>Director</h4>
              <p> {{ movie.Director }} </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          md="6"
          offset-md="1"
        >
          <div class="img-poster">
            <v-img
              :src="movie.Poster"
              :lazy-src="movie.Poster"
              class="img-responsive"
            />
          </div>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        />
      </v-row>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
