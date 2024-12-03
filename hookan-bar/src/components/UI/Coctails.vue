<template>
    <div>
        <HeaderText title="КОКТЕЙЛИ" />
        <div class="coctails-back">
            <template v-for="(item, ind) in coctails_list">
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

const coctails_list = [
    {
        name: 'Афродита в отпуске',
        description: 'Брют, аперолль, содовая',
        price: '500₽',
    },
    {
        name: 'Бурлеск Посейдона',
        description: 'Трипл-сек, водка, текила, джин, кола, карамель, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Тот самый нектар',
        description: 'Ром, ананасовый сок, амаретто, сироп кокос, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Зевс на диете',
        description: 'Мартини фиеро, тоник',
        price: '500₽',
    },
    {
        name: 'Пьяный Сатир',
        description: 'Виски, амаретто',
        price: '500₽',
    },
    {
        name: 'Сладость Артемиды',
        description: 'Текила, апельсиновый сок, сироп гренадин',
        price: '500₽',
    },
    {
        name: 'Чаша Аполлона',
        description: 'Адвокат, сироп карамель, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Хаос с лимоном',
        description: 'Джин, сахарный, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Минотавр на пенсии',
        description: 'Ром, кола, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Искра Ареса',
        description: 'Пюре Ямайская мечта, водка, брют',
        price: '500₽',
    },
    {
        name: 'Смешанный Олимп',
        description: 'Текила, ананасовый сок, блюшка, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Боги на вечеринке',
        description: 'Абсент, брют, берн, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Молния Посейдона',
        description: 'Ром, ананасовый сок, блюшка, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Лик Химеры',
        description: 'Текила, пюре лимон-имбирь, ананасовый сок, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Кровь Медузы',
        description: 'Водка, сироп карамель, лимонный сок',
        price: '500₽',
    },
    {
        name: 'Геракл и его коктейль',
        description: 'Текила, грейпфрутовый сок, сироп карамель, содовая, лимонный сок',
        price: '500₽',
    },
]
</script>

<style lang="scss" scoped>
.coctails-back {
    background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("../../assets/coctails_back.jpg");
    background-size: contain;
    background-position: center;
    background-attachment: fixed;
    background-blend-mode: multiply;
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