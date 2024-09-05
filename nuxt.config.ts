// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    // 기타 Tailwind 관련 설정...
  },
  devtools: { enabled: true },
  extends: ["./base"],
  imports: {
    dirs: ["config"],
  }
})
