<template>
  <div class="container-page">
    <zupHeader />

    <v-progress-linear
      v-if="isLoadingMovies"
      indeterminate
      :absolute="true"
      :background-opacity="0"
      color="primary"
    />

    <div class="container">
      <div
        class="form-page"
      >
        <v-text-field
          v-model="titleSearch"
          label="Título"
          class="top form-input"
          hide-details="auto"
          :disabled="isLoadingMovies"
          outlined
          dense
          @keyup.enter="searchMovies"
        />

        <v-text-field
          v-model="yearSearch"
          label="Ano"
          class="top form-input"
          hide-details="auto"
          :disabled="isLoadingMovies"
          outlined
          dense
          @keyup.enter="searchMovies"
        />

        <v-select
          v-model="typeSearch"
          :items="moviesTypes"
          item-text="name"
          item-value="value"
          class="input-sort"
          label="Tipo"
          rounded
          dense
          hide-details
          outlined
        />

        <v-btn
          class="mt-6 white--text"
          :loading="isLoadingMovies"
          color="primary"
          :disabled="!titleSearch"
          block
          rounded
          @click="searchMovies()"
        >
          Listar
        </v-btn>
      </div>
    </div>
    <div>
      <div class="container">
        <ItemsList
          :items="movies"
          :paginated="true"
          :page="page"
          :total-pages="totalPages"
          hint-column-name="Title"
          :is-loading-items="isLoadingMovies"
          :is-disabled-items="false"
          no-items-found-text="Nenhuma item encontrada"
          @emit-detail-item="movieDetails"
          @emit-change-page="changePagination"
        />
      </div>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
