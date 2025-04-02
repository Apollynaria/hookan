<template>
    <div>
        <HeaderText title="Бар" />
        <div class="tea-back row q-mx-lg">
            <div class="col">
                <div v-for="(category, categoryName) in bar_list_left" :key="categoryName">
                    <div class="category">{{ categoryName }}</div>
                    <div v-for="(item, index) in category" :key="index" class="flex justify-between">
                        <div class="title">{{ item.name }}</div>
                        <div class="price">
                            {{ item.price }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1" style="width: 10px;"></div>
            <div class="col">
                <div v-for="(category, categoryName) in bar_list_right" :key="categoryName">
                    <div class="category">{{ categoryName }}</div>
                    <div v-for="(item, index) in category" :key="index" class="flex justify-between">
                        <div class="title">{{ item.name }}</div>
                        <div class="price">
                            {{ item.price }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderText from './HeaderText.vue';
import { bar_list_left, bar_list_right } from '../../text/text';

</script>

<style lang="scss" scoped>
.tea-back {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../../assets/bar_back.jpg");
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
    font-size: 10px;
}

.price {
    font-size: 10px;
}

.category {
    font-size: 18px;
    border-bottom: #ffffff 1px solid;
    margin-bottom: 5px;
}
</style>