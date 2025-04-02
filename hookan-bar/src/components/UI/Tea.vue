<template>
    <div>
        <HeaderText title="АВТОРСКИЙ ЧАЙ" />
        <div class="tea-back">
            <template v-for="(item, ind) in tea_list">
                <div class="q-mx-lg" :class="[ind !== 0 ? 'q-mt-lg' : '']">
                    <div class="flex row gap-2">
                        <div class="title">
                            {{ item.name }}
                        </div>
                        <div class="center-div" />
                        <div class="price">
                            {{ item.price }}
                        </div>
                    </div>
                    <div class="description">
                        {{ item.description }}
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderText from './HeaderText.vue';
import { tea_list } from '../../../text/text';

</script>

<style lang="scss" scoped>
.tea-back {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../assets/tea_back.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

* {
    color: #ffffff;
}

.center-div {
    flex: 1;
    border-bottom: 3px dotted;
    border-width: 2px;
    margin: 0px 4px 7px 4px;
}

.title {
    font-size: 18px;
    text-transform: uppercase;
}

.description {
    font-size: 11px;
}

.price {
    font-size: 18px;
}
</style>