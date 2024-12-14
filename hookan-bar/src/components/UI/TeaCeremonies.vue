<template>
    <div>
        <HeaderText title="ЧАЙНЫЕ ЦЕРЕМОНИИ" />
        <div class="tea-back">
            <template v-for="(item, ind) in tea_ceremonies_list">
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

const tea_ceremonies_list = [
    {
        name: 'Бин Те Гуань Инь Мао Ча',
        description: '',
        price: '600₽',
    },
    {
        name: 'Фэн Хуан Дань Цун',
        description: '',
        price: '600₽',
    },
    {
        name: 'Габа Алишань',
        description: '',
        price: '700₽',
    },
    {
        name: 'Уи Ци Лань',
        description: '',
        price: '700₽',
    },
    {
        name: 'Сычуань Мао Фэн',
        description: '',
        price: '550₽',
    },
    {
        name: 'Да Хун Пао Чжень Янь',
        description: '',
        price: '650₽',
    },
    {
        name: 'Цзинь Хао Дянь Хун',
        description: '',
        price: '500₽',
    },
    {
        name: 'Шен Пуэр Фаб',
        description: '',
        price: '650₽',
    },
    {
        name: 'Шу Пуэр Байдао У Чжай',
        description: '',
        price: '650₽',
    },
]
</script>

<style lang="scss" scoped>
.tea-back {
    background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../assets/ceremonies_back.jpg");
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