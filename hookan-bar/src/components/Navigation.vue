<template>
    <header style="border-bottom: 1px solid #5c005c">
        <nav :class="{ 'justify-center': mobile }">
            <div class="branding" :class="{ 'ml-20': !mobile }">
                GORGONA LOUNGE
            </div>
            <ul v-show="!mobile" class="navigation">
                <template v-for="item in navigationMenuList">
                    <li style="margin-left: 2px !important; "><router-link class="link" :to="item.link">{{ item.text }}</router-link></li>
                </template>
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
                            <img @click="router.push('/')" src="../assets/logo.jpg" alt="logo">
                        </div>
                        <q-icon @click="toggleMobileNav" name="close" size="sm" :class="{ 'icon-active': mobileNav }" />
                    </div>
                    <template v-for="item in menuList">
                        <li>
                            <div @click="navigateToMenu(item.id)">{{ item.text }}</div>
                        </li>
                    </template>
                    <div class="q-ma-md">
                        <hr class="hr-separator">
                    </div>
                    <div class="q-gutter-md q-mt-sm" style="padding-left: 16px;">
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
    <header style="background-color: rgba(0, 0, 0, 0); z-index: 5; margin-top: 50px;">
        <nav v-show="mobile" class="nav-mini-mobile">
            <ul class="navigation li-style">
                <li>
                    <div @click="navigateToMenu('hookan')">Кальян</div>
                </li>
                <li>
                    <div @click="navigateToMenu('tea_ceremonies')">Чайные церемонии</div>
                </li>
                <li>
                    <div @click="navigateToMenu('coctails')">Коктейли</div>
                </li>
            </ul>
        </nav>
    </header>
    <div v-if="!mobile" style="height: 50px;"></div>
    <div v-if="mobile" style="height: 100px;"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QIcon } from 'quasar';
import router from '@/router';

const mobile = ref(false);
const mobileNav = ref(false);
const windowWidth = ref(0);

const navigationMenuList = [
    {
        link: '/',
        text: 'Главная',
    },
    {
        link: '/interior',
        text: 'Интерьер',
    },
    {
        link: '/rules',
        text: 'Правила посещения',
    },
    {
        link: '/contacts',
        text: 'Контакты',
    },
]

const menuList = [
    {
        id: 'hookan',
        text: 'Кальяны',
    },
    {
        id: 'promo',
        text: 'Акции',
    },
    {
        id: 'bar',
        text: 'Бар',
    },
    {
        id: 'coctails',
        text: 'Коктейли',
    },
    {
        id: 'designer_lemonades',
        text: 'Авторские лимонады',
    },
    {
        id: 'tea',
        text: 'Авторский чай',
    },
    {
        id: 'tea_ceremonies',
        text: 'Чайные церемонии',
    },
    {
        id: 'snacks',
        text: 'Закуски',
    },
]
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
.li-style {
    li {
        padding: 0 !important; 
        margin-left: 16px !important;
    }
}
.ml-20 {
  margin-left: 40px;
}
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
        // padding: 0 50px 0 50px;
        transition: .5s ease all;
        width: 90%;
        height: 50px;
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
            white-space: nowrap;
        }

        li {
            text-transform: uppercase;
            padding: 16px;
            cursor: pointer;

            &:hover {
                color: #f7a806;
            }
        }

        .branding {
            display: flex;
            align-items: center;
            font-size: 25px;
            img {
                width: 110px;
                transition: .6s ease all;
                cursor: pointer;
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