<template>
    <Disclosure
        v-slot="{ open }"
        as="nav"
        class="fixed inset-x-0 z-10 transition-bg duration-300"
        :class="{ 'bg-white shadow': !isTopOfPage }"
    >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 justify-between">
                <div class="flex">
                    <div class="flex flex-shrink-0 items-center">
                        <img
                            class="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                        <a
                            href="#menu"
                            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            :class="{ 'text-white hover:border-gray-100 hover:text-gray-300': isTopOfPage }"
                        >
                            Our Menu
                        </a>
                        <button
                            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            :class="{ 'text-white hover:border-gray-100 hover:text-gray-300': isTopOfPage }"
                            @click="isBookingModalOpen = true"
                        >
                            Book a Table
                        </button>
                        <a
                            href="#contact"
                            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            :class="{ 'text-white hover:border-gray-100 hover:text-gray-300': isTopOfPage }"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                <div class="-mr-2 flex items-center sm:hidden">
                    <!-- Mobile menu button -->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <FontAwesomeIcon v-if="!open" :icon="faBars" class="block h-6 w-6" aria-hidden="true" />
                        <FontAwesomeIcon v-else :icon="faTimes" class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 pb-3 pt-2">
                <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
                <DisclosureButton
                    as="a"
                    href="#menu"
                    class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                    Our Menu
                </DisclosureButton>
                <DisclosureButton
                    as="button"
                    class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    @click="isBookingModalOpen = true"
                >
                    Book a Table
                </DisclosureButton>
                <DisclosureButton
                    as="a"
                    href="#contact"
                    class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                    Contact Us
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>

    <BookingModal :open="isBookingModalOpen" @close="isBookingModalOpen = false" />
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useWindowScroll } from '@vueuse/core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import BookingModal from '~/components/BookingModal.vue'

const { y } = useWindowScroll()
const isTopOfPage = computed(() => y.value < 100)

const isBookingModalOpen = ref(false)
</script>
