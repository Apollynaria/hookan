<template>
    <div>
        <HeaderText title="АВТОРСКИЕ ЛИМОНАДЫ" />
        <div class="lemonades-back">
            <template v-for="(item, ind) in lemonades_list">
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

const lemonades_list = [
    {
        name: 'Киви – фейхоа',
        description: 'Пюре киви, сироп кокос, лимонный сок, содовая',
        price: '500₽',
    },
    {
        name: 'Арбуз – ананас',
        description: 'Пюре арбуз, ананасовый сок, лимонный сок, содовая',
        price: '500₽',
    },
    {
        name: 'Груша – миндаль',
        description: 'Пюре груша, сироп миндаль, лимонный сок, содовая',
        price: '500₽',
    },
    {
        name: 'Малина – Мята',
        description: 'Пюре малина, сироп мята, лимонный сок, содовая',
        price: '500₽',
    },
    {
        name: 'Вишня – Юдзу',
        description: 'Пюре вишня, вишневый сок, лимонный сок, cироп блю кюрасао, содовая',
        price: '500₽',
    },
]
</script>

<style lang="scss" scoped>
.lemonades-back {
    background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("../../assets/lemonades_back.jpg");
    background-size: auto;
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