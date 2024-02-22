// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: process.env.NODE_ENV !== 'production' },
    modules: ['@builder.io/sdk-vue/nuxt'],
    runtimeConfig: {
        public: {
            builderApiKey: '',
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
