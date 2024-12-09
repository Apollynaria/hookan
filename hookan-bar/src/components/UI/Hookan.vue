<template>
    <div>
        <HeaderText title="КАЛЬЯНЫ" />
        <template v-for="(item, ind) in hookan_list">
            <div class="text-center text-white  q-mb-lg">
                <q-img class="q-mt-lg" :src="item.img" style="height: 400px; width: 278px;"></q-img>
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

const hookan_list = [
    {
        name: 'Классический',
        description: ' По мотивам всемирно известного коктейля Cosmopolitan, мы создали новую версию этого напитка с добавлением грантового сока, которая подчеркнет все вкусовые тонкости. ',
        price: '2200₽',
        img: image1,
    },
    {
        name: 'Премиум',
        description: ' По мотивам всемирно известного коктейля Cosmopolitan, мы создали новую версию этого напитка с добавлением грантового сока, которая подчеркнет все вкусовые тонкости. ',
        price: '2200₽',
        img: image2,
    },
]
</script>

<style lang="scss" scoped></style>