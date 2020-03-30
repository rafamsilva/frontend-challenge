<template>
  <div class="items ml-2">
    <div class="items-header d-flex justify-space-between align-center">
      <div class="section-title">
        <span>
          {{ title }}
        </span>
      </div>
    </div>

    <div
      v-if="isLoadingItems"
      class="loading d-flex justify-center align-center"
    >
      <v-progress-circular
        indeterminate
        size="40"
        color="primary"
      />
    </div>

    <div
      v-else
      class="item-list mb-3"
    >
      <div
        v-if="items.length === 0"
      >
        <div class="col-md-12 text-center search-movie">
          <span
            v-if="textNoneFound"
            class="item-name"
          >
            {{ textNoneFound }}
          </span>

          <span
            v-else
            class="item-name"
          >
            <img
              class="img-responsive"
              src="@/assets/imgs/illustration-empty-state.png"
              alt="search"
            >
            <h3>Don't know what to search?</h3>
            <p>Here's an offer you can't refuse</p>
          </span>
        </div>
      </div>

      <div
        v-for="item in items"
        v-else
        :key="item.imdbID"
        class="list-item d-flex justify-space-between align-center"
      >
        <v-card
          flat
          tile
          class="d-flex"
        >
          <a
            :disabled="isDisabledItems"
            @click="itemDetail(item)"
          >
            <v-img
              :src="creatorImage(item.Poster)"
              aspect-ratio="1"
              class="item-image grey lighten-2"
            />
          </a>
        </v-card>
      </div>
    </div>

    <v-pagination
      v-if="paginated"
      v-model="page"
      :length="totalPages"
      :total-visible="7"
      circle
      @input="changePage"
    />
  </div>
</template>

<script src="./scripts.js" />

<style lang="scss">
  @import './style.scss';
</style>
