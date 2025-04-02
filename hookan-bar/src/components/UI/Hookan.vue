<template>
    <div>
        <HeaderText title="КАЛЬЯНЫ" />
        <template v-for="(item, ind) in hookan_list">
            <div class="text-center text-white  q-mb-lg">
                <q-img v-if="item.img" class="q-mt-lg" :src="item.img" style="height: 400px; width: 278px;"></q-img>
                <div class="title text-h5 q-mt-lg">
                    {{ item.name }}
                </div>
                <div class="description q-mx-lg q-mt-sm">
                    {{ item.description }}
                </div>
                <div class="price text-h5 q-mt-md">
                    {{ item.price }}
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { QImg } from 'quasar';
import HeaderText from './HeaderText.vue';
import image1 from '@/assets/hookan1.jpg';
import image2 from '@/assets/hookan2.jpg';
import { computed } from 'vue'

import { hookan_list_text } from '../../text/text';

const hookan_list = computed(() => {
    const firstTwoItems = hookan_list_text.slice(0, 2).map((item, index) => (
        {
        ...item,
        img: index === 0 ? image1 : image2,
        }
    ));

    // Получаем оставшиеся элементы без изменений
    const restItems = hookan_list_text.slice(2);

    // Объединяем оба массива.
    return [...firstTwoItems, ...restItems];
})

</script>

<style lang="scss" scoped></style>