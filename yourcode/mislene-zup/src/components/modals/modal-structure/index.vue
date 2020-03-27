<template>
  <v-dialog
    v-model="showModal"
    :persistent="modalPersistent"
    width="500"
    @click:outside="!modalPersistent && cancel()"
  >
    <v-card>
      <v-card-title
        dark
        :class="`header-title d-flex justify-center align-center ${backgroundColor}`"
      >
        <div
          v-if="icon"
          class="icon-container d-flex justify-center align-center pa-2"
        >
          <v-icon
            color="#fff"
          >
            {{ iconName }}
          </v-icon>
        </div>

        <span
          class="modal-header-text"
          v-html="title"
        />
      </v-card-title>

      <v-card-text
        class="card-text d-flex justify-center align-center my-7"
        v-html="message"
      />

      <div class="actions d-flex justify-center align-center pb-4">
        <v-btn
          class="action-btn mx-3"
          color="#757575"
          rounded
          text
          @click="cancel()"
        >
          {{ textCancel }}
        </v-btn>

        <v-btn
          v-if="textConfirm"
          class="action-btn mx-3"
          rounded
          dark
          color="#f58532"
          :loading="isConfirmButtonLoading"
          @click="confirm()"
        >
          {{ textConfirm }}
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script src="./scripts.js" />

<style lang="scss">
  @import './style.scss';
</style>
