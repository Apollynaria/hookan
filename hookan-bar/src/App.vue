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
    font-family: 'TrebuchetMS';
    src: url('./fonts/TrebuchetMS.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Impact';
    src: url('./fonts/Impact.ttf') format('truetype');
  }
  @font-face {
    font-family: 'CourierNew';
    src: url('./fonts/CourierNew.ttf') format('truetype');
  }

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
