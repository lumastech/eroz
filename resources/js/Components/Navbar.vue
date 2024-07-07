<template>
    <nav class="py-4 block z-50">
        <div class="mx-auto container">
            <div class="flex px-2">
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
                    <Link class="p-2 rounded-sm border border-sky-200 hover:bg-sky-800 rounded transition mx-2" href="/login">Login</Link>
                    <Link class="p-2 rounded-sm border border-sky-200 hover:bg-sky-800 rounded transition" href="/register">Join us</Link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>