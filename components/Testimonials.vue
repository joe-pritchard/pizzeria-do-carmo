<template>
    <section class="px-6 py-14 sm:py-18 lg:px-8">
        <figure class="mx-auto max-w-2xl">
            <p class="sr-only">{{ testimonial.rating }} out of 5 stars</p>
            <div class="flex gap-x-1 text-yellow-600">
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
            <figcaption class="mt-7 flex items-center gap-x-6">
                <div class="text-sm leading-6">
                    <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                    <div class="mt-0.5 text-gray-600">{{ testimonial.location }}</div>
                </div>
            </figcaption>
        </figure>

        <div v-if="testimonials.length > 1" class="mt-16 flex justify-center space-x-2">
            <button
                v-for="i in testimonials.length"
                :key="i"
                :aria-label="`Show testimonial ${i}`"
                :title="`Show testimonial ${i}`"
                class="w-4 h-4 rounded-full border-2 border-yellow-600"
                :class="{ 'bg-yellow-600': index === i - 1 }"
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
