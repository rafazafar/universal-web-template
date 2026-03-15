<script setup lang="ts">
const colorMode = useColorMode()
const { uiLocale } = useNuxtUiLocale()
const localeHead = useLocaleHead()

const color = computed(() => colorMode.value === 'dark' ? '#1b1718' : 'white')

definePageMeta({
  title: 'app.title'
})

const title = $t('app.title') as string
const description = $t('app.description') as string

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/dashboard-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/dashboard-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :locale="uiLocale">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
