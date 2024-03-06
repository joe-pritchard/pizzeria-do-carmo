<template>
    <div class="relative isolate overflow-hidden pt-14 min-h-80 max-h-screen">
        <img :src="image" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-bottom" />
        <div class="bg-gray-900 absolute inset-0 -z-10 opacity-50 h-full w-full" />

        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    {{ headline }}
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-300">
                    {{ subheadline }}
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <button
                        v-if="siteConfig.bookingLink"
                        class="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                        @click="isBookingModalOpen = true"
                    >
                        Book a table
                    </button>
                    <a
                        v-if="siteConfig.menuLink"
                        :href="siteConfig.menuLink"
                        target="_blank"
                        class="text-sm font-semibold leading-6 text-white"
                    >
                        View the menu <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>

        <BookingModal :open="isBookingModalOpen" @close="isBookingModalOpen = false" />
    </div>
</template>

<script setup lang="ts">
import BookingModal from '~/components/BookingModal.vue'

defineProps({
    image: {
        required: true,
        type: String,
    },
    headline: {
        required: true,
        type: String,
    },
    subheadline: {
        required: true,
        type: String,
    },
})

const isBookingModalOpen = ref(false)
const siteConfig = useSiteConfig()
</script>
