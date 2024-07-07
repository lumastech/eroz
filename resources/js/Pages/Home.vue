<template>

    <Head title="Home" />
    <header class=" home-bg text-white">
        <div class="bg-sky-600/90">
            <Navbar />

            <div class="hero mx-auto container py-24" id="home">
                <div class="grid md:grid-cols-2">
                    <div class="self-center ">
                        <img src="../../assets/team.png" alt="">
                    </div>
                    <div class="self-center p-2">
                        <h1 class="text-4xl">Economic Response Organization Zambia (EROZ)</h1>
                        <h2 class="text-xl font-bold mt-4">Empowering Zambians for Economic Freedom</h2>
                        <br>
                        <Link class="p-4 rounded my-4 hover:bg-sky-800 transition border mr-4">Join us
                        in creating a better
                        future</Link>
                        <Link href="/about" class="bg-teal-500 p-4 rounded my-4 hover:bg-sky-800 transition border">
                        Learn More
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </header>


    <div class="content">
        <section class="section" id="about">
            <div class="container mx-auto px-2 py-16">
                <div class="grid md:grid-cols-3 gap-4 my-12">
                    <div class="text-center border p-2 rounded">
                        <img src="../../assets/skills.png" alt="" class="w-32 mx-auto">
                        <h2 class="text-xl my-2">Skills Development</h2>
                        <p>Training programs for youths, women, and men...</p>
                    </div>

                    <div class="text-center border p-2 rounded">
                        <img src="../../assets/goal.png" alt="" class="w-32 mx-auto">
                        <h2 class="text-xl my-2">Economic Activities</h2>
                        <p>Details about agriculture, manufacturing, processing, trading, service provision, and
                            infrastructure development projects...</p>
                    </div>

                    <div class="text-center border p-2 rounded">
                        <img src="../../assets/imagere.png" alt="" class="w-32 mx-auto">
                        <h2 class="text-xl my-2">Research and Consultancy</h2>
                        <p>Information on research projects and consultancy services...</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section about-bg" id="about">
            <div class="bg-blue-500/50">
                <div class="container mx-auto px-2 py-16">
                    <div class="grid md:grid-cols-2">
                        <div class="text-white">
                            <h2 class="text-4xl">About Us</h2>
                            <p>EROZ focuses on changing the mindset of Zambian youths, women, and men to see themselves
                                as
                                solutions
                                to
                                the country's economic challenges...</p>
                            <h3 class="text-xl mt-4 font-bold">Mission and Vision</h3>
                            <p>Our mission is to empower members with productive skills that directly impact their
                                well-being...</p>
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
                        <div></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" id="programs">
            <div class="container mx-auto px-2 py-16">
                <div class="grid md:grid-cols-2">
                    <div class="self-center">
                        <img src="../../assets/imagere.png" alt="">
                    </div>
                    <div class="self-center">
                        <h2 class="text-4xl">Programs</h2>
                        <div class="flex border-b hover:bg-sky-100 transition">
                            <div class="shrink-0 self-center">
                                <img src="../../assets/tick.png" alt="" class="w-16 mx-auto">
                            </div>
                            <div class="flex-auto">
                                <h3 class="text-xl mt-4 font-bold">Skills Development</h3>
                                <p>Training programs for youths, women, and men...</p>
                            </div>
                        </div>

                        <div class="flex border-b hover:bg-sky-100 transition">
                            <div class="shrink-0 self-center">
                                <img src="../../assets/tick.png" alt="" class="w-16">
                            </div>
                            <div class="flex-auto">
                                <h3 class="text-xl mt-4 font-bold">Economic Activities</h3>
                                <p>Details about agriculture, manufacturing, processing, trading, service provision, and
                                    infrastructure
                                    development projects...</p>
                            </div>
                        </div>

                        <div class="flex border-b hover:bg-sky-100 transition">
                            <div class="shrink-0 self-center">
                                <img src="../../assets/tick.png" alt="" class="w-16">
                            </div>
                            <div class="flex-auto">
                                <h3 class="text-xl mt-4 font-bold">Research and Consultancy</h3>
                                <p>Information on research projects and consultancy services...</p>
                            </div>
                        </div>

                        <div class="flex border-b hover:bg-sky-100 transition">
                            <div class="shrink-0 self-center">
                                <img src="../../assets/tick.png" alt="" class="w-16">
                            </div>
                            <div class="flex-auto">
                                <h3 class="text-xl mt-4 font-bold">Advocacy</h3>
                                <p>Efforts in advocating for government policies, morality, and zero corruption...</p>
                            </div>
                        </div>

                        <div class="flex border-b hover:bg-sky-100 transition">
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
        </section>

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

        <section class="section" id="get-involved">
            <div class="container mx-auto px-2 py-16">
                <h2 class="text-4xl mt-4 font-bold">Get Involved</h2>
                <div class="grid md:grid-cols-2 gap-4 text-white">
                    <div class="shadow rounded p-4 bg-sky-400">
                        <img src="../../assets/team.png" alt="" class="aspect-video  w-full">
                        <h3 class="text-xl mt-4 font-bold">Join Us</h3>
                        <p>Membership information and how to become a member...</p>
                        <Link href="/register" class="px-4 py-2 bg-white rounded text-black mt-4 inline-block">Join Us
                        </Link>
                    </div>
                    <div class="shadow rounded p-4 bg-orange-400">
                        <img src="../../assets/imagere.png" alt="" class="aspect-video w-full">
                        <h2 class="text-2xl">Volunteer</h2>
                        <p>Volunteer opportunities and application process...</p>
                        <Link href="/register" class="px-4 py-2 bg-white rounded text-black mt-4 inline-block">Volunteer
                        </Link>
                    </div>
                    <div class="shadow rounded p-4 bg-teal-400">
                        <img src="../../assets/team.png" alt="" class="aspect-video  w-full">
                        <h3 class="text-xl mt-4 font-bold">Donate</h3>
                        <p>Information on how to support EROZ financially...</p>
                        <Link href="/register" class="px-4 py-2 bg-white rounded text-black mt-4 inline-block">Donate
                        </Link>
                    </div>
                    <div class="shadow rounded p-4 bg-purple-400">
                        <img src="../../assets/team.png" alt="" class="aspect-video  w-full">
                        <h3 class="text-xl mt-4 font-bold">Partnerships</h3>
                        <p>How organizations can partner with EROZ...</p>
                        <Link href="/register" class="px-4 py-2 bg-white rounded text-black mt-4 inline-block">Partner With Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-gray-50" id="contact">
            <div class="container mx-auto px-2 py-16">
                <h2 class="text-2xl">Contact</h2>
                <div class="grid md:grid-cols-4 gap-4 border p-4 rounded bg-sky-100">
                    <div class="self-center">
                        <p>Email: info@eroz.org</p>
                        <p>Phone: +260-123-456-789</p>
                        <p>Address: 123 EROZ Street, Lusaka, Zambia</p>
                    </div>
                    <div class="md:border-l md:pl-4 md:col-span-3">
                        <form @submit.prevent="submit" class="w-full">
                            <label for="name" class="block">Name:</label>
                            <input type="text" id="name" name="name" class="block w-full rounded border-sky-600">
                            <label for="email" class="block">Email:</label>
                            <input type="email" id="email" name="email" class="block w-full rounded border-sky-600">
                            <label for="message" class="block">Message:</label>
                            <textarea id="message" name="message"
                                class="block w-full rounded border-sky-600"></textarea><br>
                            <div class="text-right">
                                <button
                                    class="bg-sky-600 px-4 py-2 rounded text-white hover:bg-sky-700 transition">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <Footer />
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Footer from '@/Components/Footer.vue';
import Navbar from '@/Components/Navbar.vue';
const submit = () => {
    alert("submited!");
}
</script>
<style>
 .about-bg{
    background-image: url('../../assets/image2.png');
    background-size: cover;
    background-position: 70% 50%;
    background-repeat: no-repeat;
 }
 .home-bg{
    background-image: url('../../assets/economic.png');
    background-size: cover;
    background-repeat: no-repeat;
 }
</style>