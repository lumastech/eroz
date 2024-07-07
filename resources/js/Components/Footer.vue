<template>
    <footer class="bg-sky-600 text-white">
        <div class="container mx-auto p-2">
            <div class="grid md:grid-cols-3 gap-4 my-12">
                <div>
                    <h1 class="text-4xl font-bold">EROZ</h1>
                    <img src="../../assets/bg2.jpg" alt="" class="w-full aspect-sqare">
                </div>
                <div>
                    <h1 class="text-2xl font-bold">Quick Links</h1>
                    <Link class="block p-2 rounded-sm hover:bg-sky-700 transition" href="/">Home</Link>
                    <Link class="block p-2 rounded-sm hover:bg-sky-700 transition" href="/about">About Us</Link>
                    <Link class="block p-2 rounded-sm hover:bg-sky-700 transition" href="/programs">Programs</Link>
                    <Link class="block p-2 rounded-sm hover:bg-sky-700 transition" href="/news">News & Events</Link>
                    <Link class="block p-2 rounded-sm hover:bg-sky-700 transition" href="/get-involved">Get Involved
                    </Link>
                    <Link class="block p-2 rounded-sm hover:bg-sky-700 transition" href="/contact">Contact</Link>

                </div>
                <div>
                    <Link class="block p-2 rounded-sm hover:bg-sky-700 transition" href="/login">Login</Link>
                    <Link class="block p-2 rounded-sm hover:bg-sky-700 transition" href="/register">Join us</Link>
                </div>
            </div>
            <hr>
            <p>&copy; 2024 Economic Response Organization Zambia. All rights reserved.</p>
            <p><a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">LinkedIn</a></p>
        </div>
    </footer>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>