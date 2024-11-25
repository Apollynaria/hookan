<template>
  <div>
    <HeaderText title="ИНТЕРЬЕР" />
    <div class="">
      <q-carousel animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide v-for="(img, key) in imagUrls" :name="key + 1" :img-src="img" />
      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderText from './UI/HeaderText.vue';
import { ref } from 'vue';
import { QCarousel, QCarouselSlide } from 'quasar';
import image0 from '@/assets/8EFRVFJGCQE.jpg';
import image1 from '@/assets/IMG_4198.jpg';
import image2 from '@/assets/IMG_3970.jpg';
import image3 from '@/assets/IMG_4050.jpg';
import image4 from '@/assets/IMG_4194.jpg';
const slide = ref(1)
const imagUrls = [image0, image1, image2, image3, image4];
</script>
