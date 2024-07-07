<template>
    <div class="max-w-12xl mx-auto px-2">

        <Head title="Dashboard" />

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div class="col-span-2 md:col-span-3 lg:col-span-4 shadow-sm rounded bg-white p-3">
                <div class="grid md:grid-cols-4 gap-4 place-item-end">
                    <div class="md:col-span-3">
                        <div>
                            <h3 class="text-xl text-indigo-500">
                                Congratulations
                            </h3>
                            <p>
                                You have done 0% more
                                sales this month as compared to last month.
                                you're doing great, keep it going.
                            </p>
                        </div>
                        <button
                            class="text-indigo-500 px-2 py-1 mt-4 border border-indigo-500 rounded hover:bg-indigo-500 hover:text-white transition">
                            View Badges
                        </button>
                    </div>
                    <img src="../../../assets/man_with_laptop_light.png" class="selft-end mx-auto max-w-24" alt="" />
                </div>
            </div>
            <div class="flex lg:inline shadow-sm rounded bg-white p-3 space-x-2">
                <i class="self-center p-4 bg-sky-100 text-sky-500 rounded-md fas fa-ticket"></i>
                <div class="flex-auto sm:text-center lg:text-left self-center">
                    <p class="mt-2">Posts</p>
                    <p class="text-2xl font-bold">00</p>
                </div>
            </div>

            <div class="flex lg:inline shadow-sm rounded bg-white p-3 space-x-2">
                <i class="self-center p-4 bg-teal-100 text-teal-500 rounded-md fas fa-file-invoice-dollar"></i>
                <div class="flex-auto sm:text-center lg:text-left self-center">
                    <p class="mt-2">News</p>
                    <p class="md:text-3xl font-bold">
                        <span class="text-xs"></span>00
                    </p>
                </div>
            </div>

            <div class="hidden md:flex lg:hidden shadow-sm rounded bg-white p-3">
                <i class="self-center p-4 bg-orange-100 text-orange-500 rounded-md fas fa-users"></i>
                <div class="flex-auto text-center self-center">
                    <p class="mt-2">VISITORS</p>
                    <p class="text-2xl font-bold">{{ data.visitors < 10  ? "0" : "" }}{{ data.visitors ? data.visitors
                            : "0" }}</p>
                            <BiCount :last="data.visitors_count_last_month" :current="data.visitors_count_this_month" />
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-4 my-7">
            <div
                class="grid md:grid-cols-3 min-h-70 col-span-2 md:col-span-3 lg:col-span-4 c bg-white transition rounded-md shadow-sm p-4 flex">


                <div class="md:border-l">

                </div>
            </div>

            <div class="grid grid-col-2 col-span-2 md:col-span-3 lg:col-span-2 lg:grid-cols-2 md:grid-cols-3 gap-4">
                <div
                    class="md:hidden lg:flex text-center flex-col justify-evenly justify-evenly place-items-center shadow-sm rounded bg-white p-3">
                    <i class="self-center p-4 bg-orange-100 text-orange-500 rounded-md fas fa-users"></i>
                    <div class="flex-auto self-center">
                        <p class="mt-2">VISITORS</p>
                        <p class="text-2xl font-bold">{{ data.visitors < 10 ? "0" : "" }}{{ data.visitors ?
                                data.visitors : "0" }}</p>
                                <BiCount :last="data.visitors_count_last_month"
                                    :current="data.visitors_count_this_month" />

                    </div>
                </div>

                <div class="flex flex-col justify-evenly place-items-center shadow-sm rounded bg-white p-3">
                    <div>
                        <i class="inline-block p-4 bg-teal-100 text-teal-500 rounded-md fas fa-users"></i>
                    </div>
                    <p class="mt-2">USERS</p>
                    <p class="md:text-3xl font-bold">{{ data.users ? data.users : "00" }}</p>
                    <BiCount :last="data.users_count_last_month" :current="data.users_count_this_month" />
                </div>

                <div class="col-span-2 grid grid-cols-6 shadow-sm rounded bg-white p-3">
                    <div class="col-span-2 flex flex-col justify-evenly">
                        <p class="mt-2 font-bold"> Report</p>
                        <p class="mt-2 uppercase rounded bg-primary-50 px-2 text-primary-600 inline py-1 text-sm">
                            This month
                        </p>
                        <p class="md:text-xl font-bold">
                            00
                        </p>
                    </div>
                    <div class="col-span-4">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { data } from "autoprefixer";
import DashboardLayout from "../../Layouts/DashboardLaout.vue";
import { Link, Head } from "@inertiajs/vue3";
import BiCount from "../../Components/BiCount.vue";
export default {
    components: {
        DashboardLayout,
        Link,
        Head,
        BiCount,
    },
    layout: DashboardLayout,
    props: {
        data: Object,
    }
};
</script>
