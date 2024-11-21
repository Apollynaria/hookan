<template>
    <div>
        <HeaderText title="Программа лояльности" />
        <div class="loyalty-program text-center">
            <div class="q-mx-md">
                <br>
                <p class="text-center">
                    У нас действует <a href="https://clck.ru/34iCDy" class="text-red-12">программа лояльности в
                        приложении UDS!</a> Ваша бонусная карта всегда под рукой — прямо
                    в телефоне 📲 Не упустите возможность воспользоваться всеми преимуществами ⬇
                </p>
                <ul class="q-mx-lg list-none text-center">
                    <li class="q-my-sm">Получайте до 7% CASHBACK за покупки через UDS</li>
                    <hr class="thin-hr">
                    <li class="q-my-sm">Оплачивайте до 50% суммы чека накопленными баллами</li>
                    <hr class="thin-hr">
                    <li class="q-my-sm">Присоединяйтесь к программе и получите 150 приветственных баллов</li>
                </ul>
                <br>
            </div>
            <div>
                <div class="text-center text-red-12 text-h6">Условия бонусной программы:</div>
                1 балл = 1 рубль, Баллы начисляются мгновенно
                <p class="text-center">
                    Переходите по <a href="https://clck.ru/34iCDy" class="text-red-12">ссылке</a>!
                </p>
                <a href="https://clck.ru/34iCDy"><q-img @click="" :src="imageUds" /></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { QImg } from 'quasar';
import imageUds from '@/assets/uds.jpg';

</script>

<style lang="scss" scoped>
.loyalty-program {
    color: white;
    font-size: 17px;
    word-break: break-word;
    list-style: none;
}

a {
    color: white;
}

ul {
    list-style-type: none;
}

.thin-hr {
    border: 1px solid #ff5252;
    border-width: 1px 0 0 0;
    width: 270px;
    margin: auto;
}
</style>