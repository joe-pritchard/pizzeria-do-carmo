<template>
    <main>
        <LayoutComponentsMainNav />
        <div class="flex flex-col min-h-dvh">
            <div class="flex-1 flex-grow">
                <slot />
            </div>
            <div class="mt-auto">
                <LayoutComponentsMainFooter />
            </div>
        </div>
    </main>
</template>

<script setup>
const siteConfig = useSiteConfig()
// console.log('siteConfig', JSON.stringify(siteConfig.value))
watch(siteConfig, newVal => {
    console.log('siteConfig changed', JSON.stringify(newVal))
})
</script>

<style scoped></style>
