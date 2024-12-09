<template>
    <div class="rules">
        <div class="flex row justify-center">
            <div class="flex column items-center">
                <img src="../../assets/18plus.svg" width="40px" height="40px">
                <p class="text-center">
                    Не допускаются <br> лица 
                     моложе <a class="text-red-12"><br>18 лет</a>
                </p>
            </div>
            <div class="flex column items-center">
                <img src="../../assets/shirt.svg" width="40px" height="40px">
                <p class="text-center">
                    Gorgona Lounge<br>
                    <a class="text-red-12">не несет<br> ответственность</a><br>
                    за личные вещи гостей
                </p>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="bordered q-mx-lg">
                <p class="text-center text-red-12 q-mb-xs q-mt-sm">ЗАПРЕЩАЕТСЯ:</p>
                <ul class="q-mx-lg list-none text-center">
                    <li class="q-my-sm">Курение сигарет и электронных устройств</li>
                    <hr class="thin-hr">
                    <li class="q-my-sm">Находиться в состоянии сильного алкогольного опьянения и под воздействием
                        запрещенных
                        веществ</li>
                </ul>
            </div>
        </div>
        <div class="flex justify-center q-mt-sm">
            <div class="bordered q-mx-lg">
                <div class="flex column items-center">
                    <img src="../../assets/mark.svg" class="q-mt-sm" width="40px" height="40px">
                    <p class="text-center text-red-12 q-mx-sm">
                        За нарушение правил администрация вправе отказать Вам <br> в обслуживании и дальнейшем посещении
                    </p>
                </div>
            </div>
        </div>

        <div class="q-mt-md"></div>
        <div class="text-center q-gutter-sm q-my-lg rules-smoke">
            <div v-for="(rule, index) in rules" :key="index" class="row items-center">
                <div class="bordered-white">
                    {{ rule.people }}<br>PEOPLE
                </div>
                <img v-for="i in rule.hookahs" :key="i" src="../../assets/hookan.svg" width="40px" height="40px">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const rules = [
    { people: '1—3', hookahs: 1 },
    { people: '4—6', hookahs: 2 },
    { people: '7—9', hookahs: 3 },
    { people: '10—12', hookahs: 4 },
];
</script>

<style lang="scss" scoped>
.rules {
    color: white;
    font-size: 17px;
    word-break: break-word;
    list-style: none;
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

.bordered {
    border: 1px solid #ff5252;
    width: 100%;
    max-width: 600px;
}

.bordered-white {
    border: 1px solid #ffffff;
    width: 80px;
    margin-right: 20px;
}

.rules-smoke {
    width: 100%;
    max-width: 310px;
    margin: 0 auto;
}
</style>