<template>

    <Head title="Home" />
    <header class="bg-[#004080] text-white">
        <Navbar />

        <div class="hero mx-auto container py-24" id="home">
            <div class="grid md:grid-cols-2">
                <div class="self-center ">
                    <img src="../../assets/team.png" alt="">
                </div>
                <div class="self-center p-2">
                    <h1 class="text-4xl">Economic Response Organization Zambia (EROZ)</h1>
                    <h2 class="text-xl font-bold mt-4">Empowering Zambians for Economic Freedom</h2>
                    <button class="bg-teal-500 px-4 py-3 rounded my-4">Join us in creating a better future</button>
                    <br>
                    <Link href="/about">Learn More</Link>
                </div>
            </div>
        </div>
    </header>

    <div class="content">
        
    </div>

    <Footer />
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Footer from '@/Components/Footer.vue'
import Navbar from '@/Components/Navbar.vue'
const submit = () => {
    alert("submited!");
}
</script>
<style>
 .about-bg{
    background-image: url('../../assets/image2.png');
    background-size: cover;

 }
</style>