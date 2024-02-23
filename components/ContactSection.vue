<template>
    <div id="contact" class="relative isolate bg-gray-700">
        <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                    <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                        <div
                            class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                            aria-hidden="true"
                        >
                            <div
                                class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                                style="
                                    clip-path: polygon(
                                        74.1% 56.1%,
                                        100% 38.6%,
                                        97.5% 73.3%,
                                        85.5% 100%,
                                        80.7% 98.2%,
                                        72.5% 67.7%,
                                        60.2% 37.8%,
                                        52.4% 32.2%,
                                        47.5% 41.9%,
                                        45.2% 65.8%,
                                        27.5% 23.5%,
                                        0.1% 35.4%,
                                        17.9% 0.1%,
                                        27.6% 23.5%,
                                        76.1% 2.6%,
                                        74.1% 56.1%
                                    );
                                "
                            />
                        </div>
                    </div>
                    <h2 class="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-300">
                        {{ content }}
                    </p>
                    <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Address</span>
                                <FontAwesomeIcon :icon="faShop" class="h-7 w-6 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd v-html="sanitizedAddress" />
                        </div>
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Telephone</span>
                                <FontAwesomeIcon :icon="faPhone" class="h-7 w-6 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                                <a class="hover:text-white" :href="`tel:${phoneNumber}`">{{ phoneNumber }}</a>
                            </dd>
                        </div>
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Email</span>
                                <FontAwesomeIcon :icon="faEnvelope" class="h-7 w-6 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                                <a class="hover:text-white" :href="`mailto:${email}`">{{ email }}</a>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <form
                netlify
                name="contact"
                method="POST"
                action="/"
                class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                @submit.prevent="onSubmit"
            >
                <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-white"
                                >First name</label
                            >
                            <div class="mt-2.5">
                                <input
                                    id="first-name"
                                    type="text"
                                    name="first-name"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="last-name" class="block text-sm font-semibold leading-6 text-white">
                                Last name
                            </label>
                            <div class="mt-2.5">
                                <input
                                    id="last-name"
                                    type="text"
                                    name="last-name"
                                    autocomplete="family-name"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
                            <div class="mt-2.5">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autocomplete="email"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">
                                Phone number
                            </label>
                            <div class="mt-2.5">
                                <input
                                    id="phone-number"
                                    type="tel"
                                    name="phone-number"
                                    autocomplete="tel"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-semibold leading-6 text-white">
                                Message
                            </label>
                            <div class="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 flex justify-end">
                        <button
                            type="submit"
                            class="rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                            :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                            :disabled="isSubmitting"
                        >
                            Send message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons/faShop'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

const props = defineProps({
    content: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})

const sanitizedAddress = ref('')
import('dompurify').then(({ default: DOMPurify }) => {
    sanitizedAddress.value = DOMPurify.sanitize(props.address)
})

const isSubmitting = ref(false)
const onSubmit = event => {
    const theForm = event.target

    if (theForm !== null) {
        const formData = new FormData(theForm)
        formData.set('form-name', theForm.name)

        isSubmitting.value = true
        fetch(theForm.action, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .catch(error => console.error(error))
            .finally(() => (isSubmitting.value = false))
    }
}
</script>
