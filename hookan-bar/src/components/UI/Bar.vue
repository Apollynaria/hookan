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

const bar_list_left = {
    'Пиво': [
        {
            name: 'SPATEN',
            price: '300₽',
        },
        {
            name: 'EL CAPULCO',
            price: '300₽',
        },
        {
            name: 'BUD',
            price: '250₽',
        },
        {
            name: 'STELLA ARTOIS',
            price: '300₽',
        },
        {
            name: 'HOEGAARDEN пшенич.',
            price: '250₽',
        },
        {
            name: 'HOEGAARDEN CHERRY',
            price: '250₽',
        },
        {
            name: 'VELKOPOPVICKY KOZEL',
            price: '250₽',
        },
        {
            name: 'LOVENBRAU DUNKEL',
            price: '250₽',
        },
    ],
    'Б/А напитки': [
        {
            name: 'Burn',
            price: '250₽',
        },
        {
            name: 'Добрый Ж/Б 0,33',
            price: '150₽',
        },
        {
            name: 'Лимон-лайм',
            price: '150₽',
        },
    ],
    'Снеки': [
        {
            name: 'Чипсы',
            price: '250₽',
        },
        {
            name: 'Сухарики ХРУСteam',
            price: '150₽',
        },
        {
            name: 'Арахис',
            price: '200₽',
        },
        {
            name: 'Кальмар',
            price: '300₽',
        },
        {
            name: 'Батончик',
            price: '150₽',
        },
        {
            name: 'Фитнес-батончик',
            price: '200₽',
        },
        {
            name: 'Шоколад Ritter Sport',
            price: '300₽',
        },
    ]
}


const bar_list_right = {
    'Чай': [
        {
            name: 'Эрл грей',
            price: '300₽',
        },
        {
            name: 'Зеленый с жасмином',
            price: '300₽',
        },
        {
            name: 'Молочный улун',
            price: '300₽',
        },
        {
            name: 'Цветки ромашки',
            price: '300₽',
        },
        {
            name: 'Сенча',
            price: '300₽',
        },
        {
            name: 'Женьшеневый улун',
            price: '300₽',
        },
        {
            name: 'Африканские ночи',
            price: '300₽',
        },
        {
            name: 'Ассам',
            price: '300₽',
        },
        {
            name: 'Время ежевики',
            price: '300₽',
        },
        {
            name: 'Малавийское солнце',
            price: '300₽',
        },
        {
            name: 'Высокогорный',
            price: '300₽',
        },
        {
            name: 'Кения',
            price: '300₽',
        },
    ],
}

</script>

<style lang="scss" scoped>
.tea-back {
    background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("../../assets/bar_back.jpg");
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