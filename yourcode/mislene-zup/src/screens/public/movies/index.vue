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

    <div class="background-image d-flex">
      <div
        class="form-page"
      >
        <span
          class="form-subheader"
        >
          Digite algo
        </span>

        <v-text-field
          v-model="titleSearch"
          label="Título"
          class="mt-6 form-input"
          hide-details="auto"
          :disabled="isLoadingMovies"
          outlined
          dense
          @keyup.enter="searchMovies"
        />

        <v-text-field
          v-model="yearSearch"
          label="Ano"
          class="mt-6 form-input"
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
          class="input-sort ma-1"
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
      <ItemsList
        :items="movies"
        :paginated="true"
        :page="page"
        :total-pages="totalPages"
        hint-column-name="Title"
        :is-loading-items="isLoadingMovies"
        :is-disabled-items="false"
        no-items-found-text="Nenhuma item encontrada"
        title="Filmes cadastrados"
        @emit-detail-item="movieDetails"
        @emit-change-page="changePagination"
      />
    </div>

    <footerZup />
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
