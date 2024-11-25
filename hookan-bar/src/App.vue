<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
import Contacts from './components/UI/Contacts.vue';
</script>

<template>
  <div class="app">
    <div class="overlay">
      <Navigation />
      <!-- <div style="height: 160px;"></div> -->
      <RouterView />
      <Contacts />
    </div>
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: 'Stetica';
    src: url('./fonts/AA Stetica.ttf') format('truetype');
  }

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Stetica', sans-serif;
  font-weight: 500 !important;
  letter-spacing: 0.05rem !important;
}

.app {
  min-height: 100vh;
  position: relative;
  // background-image: url("./assets/background.jpg");
  background-color: #000000;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
