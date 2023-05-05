// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // @ts-ignore
    css: ['@/assets/styles.css'],
    modules: ['nuxt-icon', '@nuxtjs/tailwindcss' ],
    build: {
        transpile: [ 'troisjs', 'gsap']
    }
})
