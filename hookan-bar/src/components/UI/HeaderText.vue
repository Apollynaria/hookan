<template>
  <div style="height: 60px;" class="bg-black">
    <div class="text-center title h-full">
      <div style="height: 25px;" />
      <p class="subtitle fancy"><span :class="`text-${color_text}`">{{ title }}</span></p>
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
}

.fancy {
  line-height: 0.5;
  text-align: center;
}

.fancy span {
  display: inline-block;
  position: relative;
}

.fancy span:before,
.fancy span:after {
  content: "";
  position: absolute;
  height: 9px;
  border-bottom: 3px solid #5c005c;
  border-top: 3px solid #5c005c;
  top: 0;
  width: 25px;
}

.fancy span:before {
  right: 100%;
  margin-right: 10px;
}

.fancy span:after {
  left: 100%;
  margin-left: 10px;
}
</style>