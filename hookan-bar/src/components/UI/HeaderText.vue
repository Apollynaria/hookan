<template>
  <div style="height: 60px;" class="">
    <div class="text-center title h-full">
      <div style="height: 25px;" />
      <div class="underline">
        <p class="subtitle fancy"><span :class="`text-${color_text}`">{{ title }}</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color_text: {
    type: String,
    default: 'white',
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 22px;
  position: relative;
}

.underline {
  position: relative;
}

.fancy {
  line-height: 0.5;
  text-align: center;
}

.fancy span {
  display: inline-block;
  position: relative;
  z-index: 1;
}

.underline::before,
.underline::after {
  content: "";
  position: absolute;
  height: 1px;
  background-color: #5c005c;
  width: 50vw;
  top: 50%;
  left: 0;
  z-index: 0;
  margin-left: 5%;
  margin-right: 5%;
}

.underline::after {
  left: auto;
  right: 0;
}
</style>