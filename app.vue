<template>
    <NuxtLayout>
        <MainNav />
        <Content
            v-if="content || isPreviewing()"
            model="page"
            :content="content"
            :custom-components="registeredComponents"
            :api-key="builderApiKey"
        />
        <!--        :custom-components="REGISTERED_COMPONENTS"-->
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
</script>

<style scoped></style>
