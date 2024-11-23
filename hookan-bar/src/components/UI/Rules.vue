<template>
    <div class="rules">
      <div class="flex column items-center">
        <img src="../../assets/18plus.svg" width="40px" height="40px">
        <p class="text-center">
          Не допускаются лица
          <br> моложе <a class="text-red-12">18 лет</a>
        </p>
      </div>
      <div class="flex column items-center">
        <img src="../../assets/shirt.svg" width="40px" height="40px">
        <p class="text-center">
          Gorgona Lounge<br>
          <a class="text-red-12">не несет ответственность</a><br>
          за личные вещи гостей
        </p>
      </div>
      <div class="flex justify-center">
        <div class="bordered q-mx-lg">
          <p class="text-center text-red-12 q-mb-xs q-mt-sm">ЗАПРЕЩАЕТСЯ:</p>
          <ul class="q-mx-lg list-none text-center">
            <li class="q-my-sm">Курение сигарет и электронных устройств</li>
            <hr class="thin-hr">
            <li class="q-my-sm">Находиться в состоянии сильного алкогольного опьянения и под воздействием запрещенных
              веществ</li>
          </ul>
        </div>
      </div>
      <div class="q-my-md q-mx-md">
        <p class="text-center"><a class="text-red-12">При порче имущества</a> заведения гость оплачивает стоимость
          имущества согласно конфликт-меню</p>
        <p class="text-center"><a class="text-red-12">Заведение не несет никакой ответственности </a> за повреждения,
          травмы, ущерб, смертельные или другие случаи возникшие во время посещения заведения</p>
      </div>
      <div class="flex justify-center">
        <div class="bordered q-mx-lg">
          <div class="flex column items-center">
            <img src="../../assets/mark.svg" class="q-mt-sm" width="40px" height="40px">
            <p class="text-center text-red-12">
              За нарушение правил администрация вправе отказать Вам <br> в обслуживании и дальнейшем посещении
            </p>
          </div>
        </div>
      </div>
  
      <div class="text-center q-gutter-sm q-my-lg rules-smoke">
        <h5 class="q-mb-lg">Правила курения</h5>
        <div class="row">
          <div class="bordered-white">1—3<br>PEOPLE</div>
          <img src="../../assets/hookan.svg" width="50px" height="50px">
        </div>
        <div class="row">
          <div class="bordered-white">4—6<br>PEOPLE</div>
          <img src="../../assets/hookan.svg" width="50px" height="50px">
          <img src="../../assets/hookan.svg" width="50px" height="50px">
        </div>
        <div class="row">
          <div class="bordered-white">7—9<br>PEOPLE</div>
          <img src="../../assets/hookan.svg" width="50px" height="50px">
          <img src="../../assets/hookan.svg" width="50px" height="50px">
          <img src="../../assets/hookan.svg" width="50px" height="50px">
        </div>
        <div class="row">
          <div class="bordered-white">10—12<br>PEOPLE</div>
          <img src="../../assets/hookan.svg" width="50px" height="50px">
          <img src="../../assets/hookan.svg" width="50px" height="50px">
          <img src="../../assets/hookan.svg" width="50px" height="50px">
          <img src="../../assets/hookan.svg" width="50px" height="50px">
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

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
  
  .bordered-red {
    border: 1px solid #ff5252;
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