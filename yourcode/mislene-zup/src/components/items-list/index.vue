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
        class="list-item d-flex justify-center align-center"
      >
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
          Nenhum curso encontrado
        </span>
      </div>

      <div
        v-for="item in items"
        v-else
        :key="item.imdbID"
        class="list-item d-flex justify-space-between align-center"
      >
        <v-tooltip
          v-if="hintColumnName"
          bottom
        >
          <template v-slot:activator="{ on }">
            <span
              class="item-name"
              v-on="on"
            >
              {{ item.Title }}
            </span>
          </template>

          <span>{{ item[hintColumnName] }}</span>
        </v-tooltip>

        <span
          v-else
          class="item-name"
        >
          {{ item.Title }}
          <b v-if="item.Type">
            - {{ item.Type }}
          </b>
        </span>

        <div class="item-actions d-flex align-center">
          <v-btn
            small
            icon
            color="primary"
            :disabled="isDisabledItems"
            @click="itemDetail(item)"
          >
            <v-icon
              small
            >
              mdi-eye
            </v-icon>
          </v-btn>
        </div>
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
