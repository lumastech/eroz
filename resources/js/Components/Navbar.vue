<template>
    <nav class="py-4 block z-50">
        <div class="mx-auto container">
            <div class="flex px-2">
                <div class="flex-auto md:hidden">
                    <button @click="navShow = !navShow" :class="{ 'hidden': navShow }"
                        class="p-2 hover:text-secondary-200 transition"><i class="fas fa-bars"></i></button>
                </div>
                <div class="flex-auto">
                    <Link href="/">EROZ</Link>
                </div>
                <div class="hidden md:flex text-right">
                    <Link class="p-2 rounded-sm hover:bg-sky-800 transition" href="/">Home</Link>
                    <Link class="p-2 rounded-sm hover:bg-sky-800 transition" href="/about">About Us</Link>
                    <Link class="p-2 rounded-sm hover:bg-sky-800 transition" href="/programs">Programs</Link>
                    <Link class="p-2 rounded-sm hover:bg-sky-800 transition" href="/news">News & Events</Link>
                    <Link class="p-2 rounded-sm hover:bg-sky-800 transition" href="/get-involved">Get Involved
                    </Link>
                    <Link class="p-2 rounded-sm hover:bg-sky-800 transition" href="/contact">Contact</Link>
                </div>
                <div>
                    <Link class="p-2 rounded-sm border border-sky-200 hover:bg-sky-800 rounded transition mx-2"
                        href="/login">Login</Link>
                    <Link class="p-2 rounded-sm border border-sky-200 hover:bg-sky-800 rounded transition"
                        href="/register">Join us</Link>
                </div>
            </div>
        </div>
    </nav>
    <!-- side nav -->
    <div @click="navShow = false"
        :class="{ 'w-0': !navShow, 'w-full': navShow, 'delay-300': !navShow, 'delay-0': navShow, 'bg-none': !navShow, 'bg-gray-900/70': !user_agent_suport, 'bg-gray-900/10': user_agent_suport }"
        class="fixed transition-w duration-0 h-full top-0 left-0 z-50 backdrop-filter backdrop-blur-sm">
        <div class="overflow-x-hidden h-full bg-secondary-900 text-secondary-200 transition-all duration-500 ease-in-out shadow-md w-2/3 md:w-72"
            :class="{ '-translate-x-full': !navShow }">
            <img src="../../assets/team.png" alt="mfumu" class="w-full bg-secondary-600 py-7 aspect-video">
            <Link href="/" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i
                class="fas w-7 fa-home mr-4"></i> Home</Link>
            <Link href="/programs" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i
                class="fas w-7 fa-solid fa-puzzle-piece mr-4"></i>Programs</Link>
            <Link href="get-involved" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i
                class="fas w-7 fa-solid fa-puzzle-piece mr-4"></i>Get Involved</Link>
            <Link href="news" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i
                class="fas w-7 fa-solid fa-puzzle-piece mr-4"></i>News & Blogs</Link>
            <Link href="/about" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i
                class="fas w-7 fa-solid fa-circle-info mr-4"></i>About US</Link>
            <Link href="/contacts" class="p-2 block hover:bg-secondary-500 hover:text-secondary-900 transition"><i
                class="fas w-7 fa-solid fa-address-card mr-4"></i>Contact us</Link>
            <hr class="w-2/3 mx-auto border-t border-secondary-800">
        </div>
        <button>
            <i
                class="fa fa-close text-2xl absolute top-6 right-8 text-white font-thin hover:text-red-500 transition"></i>
        </button>

    </div>
</template>

<script>
import { ref } from 'vue'
import { Link, router } from '@inertiajs/vue3'
import ResponsiveNavLink from './ResponsiveNavLink.vue';

export default {
    components: { Link, ResponsiveNavLink },
    setup() {
        const navShow = ref(false)
        const user_agent_suport = ref(true)
        const search = ref(null)
        const animate = ref(0)

        const searchFunc = () => {
            if (search.value != null || search.value != '') {
                animate.value = 1;
                router.get('/searchplan/' + search.value, {}, {
                    onFinish: () => { animate.value = 1; }
                })
                animate.value = 1;
            }
        }
        const logout = () => {
            router.post(route('logout'));
        };

        return {
            navShow, user_agent_suport, search, searchFunc, logout
        }
    },

    created() {
        if (navigator.userAgent.search('Chrome') == -1) {
            this.user_agent_suport = false
        }
    }
}
</script>