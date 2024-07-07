<template>

    <Head title="Home" />
    <header class="bg-sky-600 text-white">
        <Navbar />

        <div class="hero mx-auto container py-16" id="home">
            <div class="self-center p-2">
                <h1 class="text-7xl">Programs</h1>
                <h1 class="text-4xl">Economic Response Organization Zambia (EROZ)</h1>
                <h2 class="text-xl font-bold mt-4">Empowering Zambians for Economic Freedom</h2>
            </div>
        </div>
    </header>

    <div class="content">
        <section class="section about-bg" id="about">
            <div class="bg-white/90 text">
                <div class="container mx-auto px-2 py-16">
                    <div class="grid md:grid-cols-4 gap-4">
                        <div class="md:col-span-3">
                            <h2 class="text-4xl">Programs</h2>
                            <p>EROZ offers a variety of programs aimed at empowering Zambian youths, women, and men by
                                developing their
                                skills, engaging in economic activities, providing consultancy services, and advocating
                                for beneficial
                                policies and practices.</p>

                            <h3 class="text-xl mt-4 font-bold">Skills Development</h3>
                            <p>EROZ provides training programs for youths, women, and men to develop productive skills
                                that directly
                                impact their well-being. These programs are designed to bridge the skills gap in the
                                economy and provide
                                opportunities for personal and professional growth.</p>

                            <h3 class="text-xl mt-4 font-bold">Economic Activities</h3>
                            <p>EROZ engages in various economic activities that contribute to economic growth and
                                opportunity in Zambia.
                                These activities include agriculture, manufacturing, processing, trading, service
                                provision, and
                                infrastructure development.</p>

                            <h3 class="text-xl mt-4 font-bold">Research and Consultancy</h3>
                            <p>EROZ participates in research projects and provides consultancy services to address
                                societal and economic
                                problems. By leveraging the knowledge and abilities of its members, EROZ offers
                                solutions and insights
                                that benefit the community and the nation.</p>

                            <h3 class="text-xl mt-4 font-bold">Advocacy</h3>
                            <p>EROZ advocates for government policies that support economic independence, morality,
                                and zero corruption
                                in all spheres of the economy. Through its advocacy efforts, EROZ aims to create a
                                conducive environment
                                for economic growth and development.</p>
                                
                            <h3 class="text-xl mt-4 font-bold">Wealth Creation Training</h3>
                            <p>EROZ provides training programs focused on wealth creation and personal development.
                                These programs aim
                                to equip members with the knowledge and skills needed to achieve economic and
                                individual independence.
                            </p>
                        </div>
                        <div class="p-4 border bg-teal-500 text-white rounded">
                            <h2 class="text-4xl">Programs</h2>
                            <div class="flex border-b hover:bg-teal-600 transition">
                                <div class="shrink-0 self-center">
                                    <img src="../../assets/tick.png" alt="" class="w-16 mx-auto">
                                </div>
                                <div class="flex-auto">
                                    <h3 class="text-xl mt-4 font-bold">Skills Development</h3>
                                    <p>Training programs for youths, women, and men...</p>
                                </div>
                            </div>

                            <div class="flex border-b hover:bg-teal-600 transition">
                                <div class="shrink-0 self-center">
                                    <img src="../../assets/tick.png" alt="" class="w-16">
                                </div>
                                <div class="flex-auto">
                                    <h3 class="text-xl mt-4 font-bold">Economic Activities</h3>
                                    <p>Details about agriculture, manufacturing, processing, trading, service
                                        provision, and
                                        infrastructure
                                        development projects...</p>
                                </div>
                            </div>

                            <div class="flex border-b hover:bg-teal-600 transition">
                                <div class="shrink-0 self-center">
                                    <img src="../../assets/tick.png" alt="" class="w-16">
                                </div>
                                <div class="flex-auto">
                                    <h3 class="text-xl mt-4 font-bold">Research and Consultancy</h3>
                                    <p>Information on research projects and consultancy services...</p>
                                </div>
                            </div>

                            <div class="flex border-b hover:bg-teal-600 transition">
                                <div class="shrink-0 self-center">
                                    <img src="../../assets/tick.png" alt="" class="w-16">
                                </div>
                                <div class="flex-auto">
                                    <h3 class="text-xl mt-4 font-bold">Advocacy</h3>
                                    <p>Efforts in advocating for government policies, morality, and zero
                                        corruption...</p>
                                </div>
                            </div>

                            <div class="flex border-b hover:bg-teal-600 transition">
                                <div class="shrink-0 self-center">
                                    <img src="../../assets/tick.png" alt="" class="w-16">
                                </div>
                                <div class="flex-auto">
                                    <h3 class="text-xl mt-4 font-bold">Wealth Creation Training</h3>
                                    <p>Personal development and wealth creation programs...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
.about-bg {
    background-image: url('../../assets/image2.png');
    background-size: cover;

}
</style>