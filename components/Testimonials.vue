<template>
    <section class="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <figure class="mx-auto max-w-2xl">
            <p class="sr-only">{{ testimonial.rating }} out of 5 stars</p>
            <div class="flex gap-x-1 text-indigo-600">
                <FontAwesomeIcon
                    v-for="i in testimonial.rating"
                    :key="i"
                    :icon="faStar"
                    class="h-5 w-5 flex-none"
                    aria-hidden="true"
                />
            </div>
            <blockquote
                class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9"
            >
                <p>“{{ testimonial.quote }}”</p>
            </blockquote>
            <figcaption class="mt-10 flex items-center gap-x-6">
                <img
                    class="h-12 w-12 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                    alt=""
                />
                <div class="text-sm leading-6">
                    <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                    <div class="mt-0.5 text-gray-600">{{ testimonial.location }}</div>
                </div>
            </figcaption>
        </figure>

        <div class="mt-16 flex justify-center space-x-2">
            <button
                v-for="i in testimonials.length"
                :key="i"
                :aria-label="`Show testimonial ${i}`"
                :title="`Show testimonial ${i}`"
                class="w-4 h-4 rounded-full border-2 border-indigo-600"
                :class="{ 'bg-indigo-600': index === i - 1 }"
                @click="showTestimonial(i - 1)"
            ></button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { useCycleList, useIntervalFn } from '@vueuse/core'
import type { PropType } from 'vue'

interface Testimonial {
    name: string
    location: string
    rating: number
    quote: string
}

const { testimonials } = defineProps({
    testimonials: {
        type: Array as PropType<Testimonial[]>,
        required: true,
    },
})

const { state: testimonial, index, next, go } = useCycleList(testimonials)
const interval = useIntervalFn(next, 5000)
const showTestimonial = (i: number) => {
    go(i)
    interval.pause()
    interval.resume()
}
</script>
