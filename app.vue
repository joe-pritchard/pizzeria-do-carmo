<template>
    <NuxtLayout>
        <Content
            v-if="content || isPreviewing()"
            model="page"
            :content="content"
            :custom-components="registeredComponents"
            :api-key="builderApiKey"
        />
        <div v-else>Content not Found</div>
    </NuxtLayout>
</template>

<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue'
import { registeredComponents } from '~/init-builder.ts'

const route = useRoute()
const { builderApiKey } = useRuntimeConfig().public

// fetch builder content data
const { data: content } = await useAsyncData('builderData', () =>
    fetchOneEntry({
        model: 'page',
        apiKey: builderApiKey,
        userAttributes: {
            urlPath: route.path,
        },
    }),
)

const siteConfig = useSiteConfig()
console.log(siteConfig.value?.logo)
useHead({
    title: `${siteConfig.value?.company}`,
    link: [{ rel: 'icon', type: 'image/png', href: siteConfig.value?.logo }],
})
</script>

<style scoped></style>
