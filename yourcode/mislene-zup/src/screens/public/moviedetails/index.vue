<template>
  <div class="container-page">
    <sagahHeader />

    <p>{{ JSON.stringify(movie) }}</p>

    <footerSagah />
  </div>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
