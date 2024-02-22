<template>
    <footer class="bg-gray-900">
        <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div class="flex justify-center space-x-6 md:order-2">
                <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    target="_blank"
                    class="text-gray-400 hover:text-gray-500"
                >
                    <span class="sr-only">{{ item.name }}</span>
                    <FontAwesomeIcon :icon="item.icon" class="h-6 w-6" aria-hidden="true" />
                </a>
            </div>
            <div class="mt-8 md:order-1 md:mt-0">
                <p class="text-center text-xs leading-5 text-gray-500">
                    &copy; {{ new Date().getFullYear() }} {{ siteConfig.company }}. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'

const siteConfig = useSiteConfig()
const navigation = computed(() =>
    [
        {
            name: 'Facebook',
            href: siteConfig.value.facebookLink || null,
            icon: faFacebook,
        },
        {
            name: 'Instagram',
            href: siteConfig.value.instagramLink || null,
            icon: faInstagram,
        },
        {
            name: 'X',
            href: siteConfig.value.xLink || null,
            icon: faXTwitter,
        },
        {
            name: 'YouTube',
            href: siteConfig.value.youtubeLink || null,
            icon: faYoutube,
        },
    ].filter(item => item.href !== null),
)
</script>
