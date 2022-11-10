// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "vuetify/lib/styles/main.sass"
    ],
    meta: {
        title: "Nuxt3 course"
    },
    build: {
        transpile: ["vuetify"]
    },
    vite: {
        define: {
            "process.env.DEBUG": false
        }
    }

})
