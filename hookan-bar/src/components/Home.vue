<template>
  <div>
    <q-carousel animated v-model="slide" infinite height="calc(100vh - 100px)">
      <q-carousel-slide :name="1" :img-src="imagUrl">
        <div class="absolute-full flex flex-center items-center bg-color">
          <Transition name="fade-in">
            <div class="q-ma-md text-center" v-if="anim">
              <div class="text-h6 text-white subtitle-text">Уютное место для отдыха и развлечений, где каждый найдет
                занятие по душе.<br><br></div>
              <div class="text-h6 text-white subtitle-text">В атмосфере комфорта и расслабления вы можете наслаждаться
                ароматными кальянами, провести время за увлекательными настольными играми или погрузиться в мир
                приставок в наших игровых зонах.</div>
            </div>
          </Transition>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div>
    <div id="hookan">
      <HeaderText title="КАЛЬЯНЫ" />
      <div class="text-center text-white  q-mb-lg">
        <q-img class="q-mt-lg" src="https://img.freepik.com/premium-photo/hookah-with-fume-dark_392895-21378.jpg"
          style="height: 300px; width: 278px;"></q-img>
        <div class="title text-h5 q-mt-lg">
          НАЗВАНИЕ
        </div>
        <div class="description q-mx-lg q-mt-sm">
          По мотивам всемирно известного коктейля Cosmopolitan, мы создали новую версию этого напитка с добавлением
          грантового сока, которая подчеркнет все вкусовые тонкости.
        </div>
        <div class="price text-h5 q-mt-md">
          2200 ₽
        </div>
      </div>
    </div>
    <div id="promo">
      <HeaderText title="АКЦИИ" color_text="red-12" />
    </div>
    <div id="bar">
      <HeaderText title="БАР" />
    </div>
    <div id="coctails">
      <HeaderText title="КОКТЕЙЛИ" />
    </div>
    <div id="designer_lemonades">
      <Limonades />
    </div>
    <div id="tea">
      <Tea />
    </div>
    <div id="tea_ceremonies">
      <HeaderText title="ЧАЙНЫЕ ЦЕРЕМОНИИ" />
    </div>
    <div id="snacks">
      <HeaderText title="ЗАКУСКИ" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { QCarousel, QCarouselSlide, QImg } from 'quasar';
import image from '@/assets/home.jpg';
import HeaderText from './UI/HeaderText.vue';
import { useRoute } from 'vue-router';
import Limonades from './UI/Lemonades.vue';
import Tea from './UI/Tea.vue';

const slide = ref(1);
const imageWidth = ref(0);
const imageHeight = ref(0);
const imagUrl = image;
const route = useRoute();
const anim = ref(false);

const scrollToMenu = (menunId?: string) => {
  if (menunId) {
    const element = document.getElementById(menunId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.warn(`Элемент "${menunId}" не найден.`);
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

onMounted(() => {
  anim.value = true;
  scrollToMenu(route.query.menu as string);
  updateImageDimensions();
  window.addEventListener('resize', updateImageDimensions);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateImageDimensions);
});

const updateImageDimensions = () => {
  imageWidth.value = window.innerWidth;
  imageHeight.value = window.innerHeight;
};


watch(() => route.query.menu, (newMenu) => {
  scrollToMenu(newMenu as string);
});

</script>

<style lang="scss" scoped>
.full-screen-image {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.full-screen-image img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.logo-text {
  font-family: Impact, Charcoal, sans-serif;
}

.subtitle-text {
  line-height: 1.8rem;
}

.bg-color {
  background-color: rgb(0, 0, 0, 0.3);
}

.scroll-target {
  scroll-margin-top: -120px;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.5s ease, transform 0.7s ease;
}

.fade-in-enter-from {
  opacity: 0;
  transform: rotate(-5deg) translateX(-30px);
}

.fade-in-leave-to {
  opacity: 0;
  transform: rotate(5deg) translateX(30px);
}
</style>