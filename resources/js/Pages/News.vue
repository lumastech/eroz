<template>

    <Head title="Home" />
    <header class="bg-sky-600 text-white">
        <Navbar />

        <div class="hero mx-auto container py-16" id="home">
            <div class="self-center p-2">
                <h1 class="text-7xl">News & Events</h1>
                <h1 class="text-4xl">Stay updated with the latest news and events from EROZ. Find out about our recent
                    activities, upcoming events, and read insightful articles from our blog.</h1>
                <h2 class="text-xl font-bold mt-4">Empowering Zambians for Economic Freedom</h2>
            </div>
        </div>
    </header>

    <div class="content">
        <section class="section bg-gray-100" id="news">
            <div class="container mx-auto px-2 py-16">
                <h2 class="text-4xl">News & Events</h2>
                <h3 class="text-xl mt-4 font-bold">Latest News</h3>
                <p>Updates on recent activities, achievements, and announcements...</p>
                <div class="grid md:grid-cols-3 gap-4 my-12">
                    <div class="border p-2 rounded">
                        <img src="../../assets/bg2.jpg" alt="" class="aspect-video  w-full rounded">
                        <h2 class="text-xl my-2">Skills Development</h2>
                        <p>Training programs for youths, women, and men...</p>
                        <Link href="#" class="px-4 py-2 rounded bg-sky-600 mt-4 inline-block text-white">Continue
                        Reading</Link>
                    </div>

                    <div class="border p-2 rounded">
                        <img src="../../assets/bg2.jpg" alt="" class="aspect-video  w-full rounded">
                        <h2 class="text-xl my-2">Economic Activities</h2>
                        <p>Details about agriculture, manufacturing, processing, trading, service provision, and
                            infrastructure development projects...</p>
                        <Link href="#" class="px-4 py-2 rounded bg-sky-600 mt-4 inline-block text-white">Continue
                        Reading</Link>
                    </div>

                    <div class="border p-2 rounded">
                        <img src="../../assets/bg2.jpg" alt="" class="aspect-video  w-full rounded">
                        <h2 class="text-xl my-2">Research and Consultancy</h2>
                        <p>Information on research projects and consultancy services...</p>
                        <Link href="#" class="px-4 py-2 rounded bg-sky-600 mt-4 inline-block text-white">Continue
                        Reading</Link>
                    </div>
                </div>

                <h3 class="text-xl mt-4 font-bold">Upcoming Events</h3>
                <p>Calendar of future events, workshops, and training sessions...</p>
                <div class="grid md:grid-cols-3 gap-4 my-12">
                    <div class="border p-2 rounded">
                        <img src="../../assets/bg2.jpg" alt="" class="aspect-video  w-full rounded">
                        <h2 class="text-xl my-2">Skills Development</h2>
                        <p>Training programs for youths, women, and men...</p>
                        <Link href="#" class="px-4 py-2 rounded bg-sky-600 mt-4 inline-block text-white">View Details
                        </Link>
                    </div>

                    <div class="border p-2 rounded">
                        <img src="../../assets/bg2.jpg" alt="" class="aspect-video  w-full rounded">
                        <h2 class="text-xl my-2">Economic Activities</h2>
                        <p>Details about agriculture, manufacturing, processing, trading, service provision, and
                            infrastructure development projects...</p>
                        <Link href="#" class="px-4 py-2 rounded bg-sky-600 mt-4 inline-block text-white">View Details
                        </Link>
                    </div>

                    <div class="border p-2 rounded">
                        <img src="../../assets/bg2.jpg" alt="" class="aspect-video  w-full rounded">
                        <h2 class="text-xl my-2">Research and Consultancy</h2>
                        <p>Information on research projects and consultancy services...</p>
                        <Link href="#" class="px-4 py-2 rounded bg-sky-600 mt-4 inline-block text-white">View Details
                        </Link>
                    </div>
                </div>


                <h3 class="text-xl mt-4 font-bold">Blog</h3>
                <p>Articles and insights on economic development and personal empowerment...</p>
                <div class="grid md:grid-cols-3 gap-4 my-12">
                    <div class="border p-2 rounded">
                        <img src="../../assets/bg2.jpg" alt="" class="aspect-video  w-full rounded">
                        <h2 class="text-xl my-2">Skills Development</h2>
                        <p>Training programs for youths, women, and men...</p>
                        <Link href="#" class="px-4 py-2 rounded bg-sky-600 mt-4 inline-block text-white">Continue
                        Reading</Link>
                    </div>

                    <div class="border p-2 rounded">
                        <img src="../../assets/bg2.jpg" alt="" class="aspect-video  w-full rounded">
                        <h2 class="text-xl my-2">Economic Activities</h2>
                        <p>Details about agriculture, manufacturing, processing, trading, service provision, and
                            infrastructure development projects...</p>
                        <Link href="#" class="px-4 py-2 rounded bg-sky-600 mt-4 inline-block text-white">Continue
                        Reading</Link>
                    </div>

                    <div class="border p-2 rounded">
                        <img src="../../assets/bg2.jpg" alt="" class="aspect-video  w-full rounded">
                        <h2 class="text-xl my-2">Research and Consultancy</h2>
                        <p>Information on research projects and consultancy services...</p>
                        <Link href="#" class="px-4 py-2 rounded bg-sky-600 mt-4 inline-block text-white">Continue
                        Reading</Link>
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