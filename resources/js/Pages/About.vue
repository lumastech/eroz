<template>

    <Head title="Home" />
    <header class="bg-sky-600 text-white">
        <Navbar />

        <div class="hero mx-auto container py-16" id="home">
            <div class="self-center p-2">
                <h1 class="text-7xl">About Us</h1>
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
                            <h2 class="text-4xl">The Economic Response Organization Zambia (EROZ)</h2>
                            <p>EROZ focuses on changing the mindset of
                                Zambian youths, women, and men to see themselves as solutions to the country's economic
                                challenges. Furthermore, this organization will position itself to train and empower
                                members with productive skills that will have a direct impact on their well-being. This
                                organization's vision is to expand throughout Zambia, bringing economic revolution and
                                freedom. This will be accomplished by members banding together and cooperating as a
                                team. The organization will also involve stakeholders such as the government, commercial
                                sector, and international society who share the organization's goals.</p>
                            <h3 class="text-xl mt-4 font-bold">Mission and Vision</h3>
                            <p>Our mission is to empower members with productive skills that directly impact their
                                well-being.</p>
                            <p>EROZ will accomplish its mission by bringing together people with a variety of knowledge
                                or abilities who can propose solutions to societal and economic problems, thereby
                                bridging the skills gap in the economy. The organization will present itself as a
                                conduit for various stakeholders and individuals to collaborate with it in responding to
                                national concerns. The organization will position itself to become a pool of highly
                                trained untapped human capital and will engage in economic activities that will
                                contribute to economic growth and opportunity in agriculture, manufacturing, processing,
                                trading, service provision, and infrastructure development.</p>
                            <h3 class="text-xl mt-4 font-bold">Our Goals</h3>
                            <p>The organization's major goal is to motivate members to change their thoughts in order to
                                find solutions to the country's economic and social problems, ultimately leading to
                                economic and individual independence. The organization is established to contribute to
                                the solution of unemployment in the country by engaging members who have the skills but
                                may not be employed. It will also provide a platform for fresh graduates to gain
                                experience while contributing to the country's economic progress through the many
                                projects that EROZ will undertake. Further, the organization will provide professional
                                services to the community, business houses, and various organizations requiring its
                                services.</p>
                            <h3 class="text-xl mt-4 font-bold">Objectives</h3>
                            <ul>
                                <li>Participate in research and provide consultancy.</li>
                                <li>Advocate for government policy that supports economic independence.</li>
                                <li>Advocate for morality and zero corruption in all spheres of the economy.</li>
                                <li>Develop and sharpen members' skills, talents, and ideas.</li>
                                <li>Carry out economic activities.</li>
                                <li>Training in wealth creation and personal development.</li>
                            </ul>
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