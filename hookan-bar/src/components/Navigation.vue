<template>
    <header style="border-bottom: 1px solid #5c005c">
        <nav :class="{ 'justify-center': mobile }">
            <div class="branding">
                <img src="../assets/logo.jpg" alt="logo">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" to="/">Главная</router-link></li>
                <li><router-link class="link" to="/interior">Интерьер</router-link></li>
                <li><router-link class="link" to="/rules">Правила посещения</router-link></li>
                <li><router-link class="link" to="/contacts">Контакты</router-link></li>
            </ul>
            <div class="icon">
                <q-icon @click="toggleMobileNav" name="menu" :class="{ 'icon-active': mobileNav }" />
            </div>
            <div class="icon-phone">
                <a href="tel:+79016662190" style="color: white">
                    <q-icon name="phone" />
                </a>

            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <div class="flex justify-between q-mx-sm q-mt-sm icon-dropdown">
                        <div class="branding">
                            <img src="../assets/logo.jpg" alt="logo">
                        </div>
                        <q-icon @click="toggleMobileNav" name="close" size="sm" :class="{ 'icon-active': mobileNav }" />
                    </div>
                    <li>
                        <div @click="navigateToMenu('hookan')">Кальяны</div>
                    </li>
                    <li>
                        <div @click="navigateToMenu('promo')">Акции</div>
                    </li>
                    <li>
                        <div @click="navigateToMenu('bar')">Бар</div>
                    </li>
                    <li>
                        <div @click="navigateToMenu('coctails')">Коктейли</div>
                    </li>
                    <li>
                        <div @click="navigateToMenu('tea')">Авторский чай</div>
                    </li>
                    <li>
                        <div @click="navigateToMenu('tea_ceremonies')">Чайные церемонии</div>
                    </li>
                    <li>
                        <div @click="navigateToMenu('designer_lemonades')">Авторские лимонады</div>
                    </li>
                    <li>
                        <div @click="navigateToMenu('snacks')">Закуски</div>
                    </li>
                    <div class="q-ma-md">
                        <hr class="hr-separator">
                    </div>
                    <div class="q-gutter-md q-mt-md" style="padding-left: 16px;">
                        <router-link class="link" to="/">Главная</router-link>
                        <router-link class="link" to="/interior">Интерьер</router-link>
                        <router-link class="link" to="/contacts">Контакты</router-link><br>
                        <router-link class="link" to="/rules">Правила посещения</router-link><br>
                        <router-link class="link" to="/loyaltyProgram">Программа лояльности</router-link>

                    </div>
                </ul>
            </transition>
        </nav>
    </header>
    <header style="background-color: rgba(0, 0, 0, 0); z-index: 5; margin-top: 120px;">
        <nav v-show="mobile" class="nav-mini-mobile">
            <ul class="navigation">
                <li>
                    <div @click="navigateToMenu('hookan')">Кальян</div>
                </li>
                <li>
                    <div @click="navigateToMenu('tea')">Чай</div>
                </li>
                <li>
                    <div @click="navigateToMenu('bar')">Бар</div>
                </li>
            </ul>
        </nav>
    </header>
    <div v-if="!mobile" style="height: 120px;"></div>
    <div v-if="mobile" style="height: 160px;"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QIcon } from 'quasar';
import router from '@/router';

const mobile = ref(false);
const mobileNav = ref(false);
const windowWidth = ref(0);

const navigateToMenu = (menu: string) => {
    router.push({ name: 'Home', query: { menu } });
};

router.beforeEach((to, from, next) => {
    mobileNav.value = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    next();
});

const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
};

const checkScreen = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 750) {
        mobile.value = true;
        return;
    }
    mobile.value = false;
    mobileNav.value = false;
    return;
}

window.addEventListener('resize', checkScreen);
checkScreen();

</script>

<style lang="scss" scoped>
.q-icon {
    &:hover {
        color: #f7a806;
    }
}

header {
    z-index: 10;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: #ffff;
    background-color: rgba(0, 0, 0, 1);

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 0 50px 0 50px;
        transition: .5s ease all;
        width: 90%;
        height: 120px;
        margin: 0 auto;

        @media (min-width: 1140px) {
            max-width: 1140px;
        }

        ul,
        .link {
            font-weight: 500;
            color: #ffff;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
            cursor: pointer;

            &:hover {
                color: #f7a806;
            }
        }

        .branding {
            display: flex;
            align-items: center;

            img {
                width: 110px;
                transition: .6s ease all;
            }
        }

        .link {
            font-size: 14px;
            transition: .4s ease all;
            padding-bottom: 4px;

            &:hover {
                color: #f7a806;
            }
        }

    }

    .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0px;
        height: 100%;

        .q-icon {
            cursor: pointer;
            font-size: 24px;
            transition: .5s ease all;
        }
    }

    .icon-phone {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0px;
        height: 100%;

        .q-icon {
            cursor: pointer;
            font-size: 24px;
        }
    }

    .icon-dropdown {
        .q-icon {
            cursor: pointer;
            transition: .5s ease all;
        }
    }

    .icon-active {
        transform: rotate(-180deg);
    }

    .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 250px;
        height: 100%;
        background-color: #000;
        top: 0;
        left: 0;
        border-right: 1px solid #5c005c;
        z-index: 99;

        li {
            margin-left: 0;
            transition: .4s ease all;


            .link {
                color: #fff;

                &:hover {
                    color: #f7a806;
                }
            }
        }
    }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: .5s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}

.hr-separator {
    border: none;
    border-top: 1px solid #5c005c;
    height: 1px;
}

.nav-mini-mobile {
    z-index: 5;
    background-color: #000000be;
    width: 100%;
    height: 50px;

    ul,
    li {
        text-transform: capitalize;
        font-size: 16px !important;
    }
}
</style>